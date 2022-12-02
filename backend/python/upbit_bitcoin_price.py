import sqlite3
import pyupbit
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import time

def update_price_data(ticker, recent_time_data):
    t = datetime.strptime(recent_time_data, '%Y-%m-%d %H:%M:%S') # sql에 저장된 마지막 시간

    # 부족한 데이터 갯수 차이 구하기(1분 단위로 갯수 차이 계산)
    utc_time = t - timedelta(hours=9) + timedelta(minutes=1) # UTC 기준 시간으로 변환
    now_time = datetime.now()  - timedelta(hours=9) + timedelta(minutes=1) # 현재 시간(UTC 기준)
    diff_time = now_time - utc_time
    minute_counts = int(diff_time.total_seconds()/60)+1 # 1분 단위로 몇개 차이나는지 개수
    # print(minute_counts)

    # sql에 저장된 마지막 시간을 기준으로 upbit 데이터 한개 가져오기
    new_df = pyupbit.get_ohlcv(ticker, interval="minute1", count=minute_counts, period=0.5) 

    return new_df, minute_counts

# 업비트 내의 모든 티커 저장
tickers = pyupbit.get_tickers(fiat="KRW") 

############################
# SQL에 데이터가 있는지 없는지 확인하기

# 1. db 연결하기
conn=sqlite3.connect('upbit_price.db') # db 연결
cur = conn.cursor() # db 커서

# ticker들 하나씩 순회하며 데이터 저장하기
while True:
    for ticker in tickers:
        try:
            # 2. db에 테이블 존재 여부 확인하기
            cur.execute(f"SELECT COUNT(*) FROM sqlite_master WHERE name='{ticker[4:]}'")
            exist_or_not = cur.fetchone()[0]
            if exist_or_not == 1: # 테이블 존재 => 테이블의 마지막 행부터 데이터 가져와서 테이블에 저장하기
                print(f"{ticker[4:]} 테이블이 존재합니다")
                cur.execute(f"SELECT * FROM '{ticker[4:]}' ORDER BY ROWID DESC LIMIT 1") # 마지막  행 읽기
                rows = cur.fetchone() 
                last_time = rows[0] # SQL 마지막에 저장된 데이터의 time 값
                update_df, update_count = update_price_data(ticker, last_time) # 새로운 데이터 프레임
                cur.execute(f"DELETE FROM '{ticker[4:]}' WHERE ROWID IN (SELECT ROWID FROM '{ticker[4:]}' ORDER BY ROWID DESC LIMIT 1)") # 기존의 마지막행 삭제
                update_df.to_sql(f'{ticker[4:]}', conn, if_exists='append') #새로운 데이터 업데이트
                print(f"\t{update_count}데이터 업데이트")
            else: # 테이블이 존재하지 않음 => 데이터를 테이블에 저장하기
                print(f"{ticker[4:]} 테이블이 존재하지 않습니다")
                # ticker의 ohlcv 값 sql에 저장하기
                df = pyupbit.get_ohlcv(ticker, interval="minute1")
                df.to_sql(f'{ticker[4:]}', conn)
                print(f"\t {ticker[4:]}데이터 저장 완료")
            
            time.sleep(0.5)
        except:
            print(f"{ticker} Error")
            time.sleep(5)
    time.sleep(5)
    conn.commit()

conn.close()