import sqlite3
import ccxt
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import time



##########################################################################################################################################################
# 가격 업데이트를 하기위한 함수
def update_price_data(ticker, recent_time_data, binance):
    t = datetime.strptime(recent_time_data, '%Y-%m-%d %H:%M:%S') # sql에 저장된 마지막 시간
    # 부족한 데이터 갯수 차이 구하기(1분 단위로 갯수 차이 계산)
    utc_time = t - timedelta(hours=9) + timedelta(minutes=1) # UTC 기준 시간으로 변환
    now_time = datetime.now()  - timedelta(hours=9) + timedelta(minutes=1) # 현재 시간(UTC 기준)
    diff_time = now_time - utc_time
    minute_counts = int(diff_time.total_seconds()/60)+1 # 1분 단위로 몇개 차이나는지 개수

    # sql에 저장된 마지막 시간을 기준으로 upbit 데이터 한개 가져오기
    btc = binance.fetch_ohlcv(
                        ticker,
                        timeframe='1m',
                        since=t.timestamp(),
                        limit=minute_counts
                        )

    df = pd.DataFrame(btc, columns=['index', 'open', 'high', 'low', 'close', 'volume']) # 가격 데이터 프래임 생성
    df['index'] = pd.to_datetime(df['index'], unit='ms')+ timedelta(hours=9) # 한국 시간으로 맞추기
    df.set_index('index', inplace=True) # 인덱스 설정
    return df, minute_counts

#######################################################################################################################################################
#######################################################################################################################################################
# Main Process
def main_process():
    ##########################################################################################################################################################
    # 바이낸스 기본 설정 (선물)
    binance = ccxt.binance(config={
        'options': {"defaultType" : "future"}
    })
    markets = binance.fetch_tickers() # 마켓 티커 조회
    usdt_tickers = [x for x in markets if 'USDT' in x] # 마켓 티커중 USDT 티커만 모아오기
    ##########################################################################################################################################################
    # SQL에 데이터가 있는지 없는지 확인하기

    # 1. db 연결하기
    conn=sqlite3.connect('binance_price.db') # db 연결
    cur = conn.cursor() # db 커서

    for ticker in usdt_tickers:
        try:
            # 2. db에 테이블 존재 여부 확인하기
            cur.execute(f"SELECT COUNT(*) FROM sqlite_master WHERE name='{ticker[:-5]}'")
            exist_or_not = cur.fetchone()[0]
            if exist_or_not == 1: # 테이블 존재 => 테이블의 마지막 행부터 데이터 가져와서 테이블에 저장하기
                print(f"{ticker[:-5]} 테이블이 존재합니다")
                cur.execute(f"SELECT * FROM '{ticker[:-5]}' ORDER BY ROWID DESC LIMIT 1") # 마지막  행 읽기
                rows = cur.fetchone() 
                last_time = rows[0] # SQL 마지막에 저장된 데이터의 time 값
                update_df, update_count = update_price_data(ticker, last_time, binance) # 새로운 데이터 프레임
                cur.execute(f"DELETE FROM '{ticker[:-5]}' WHERE ROWID IN (SELECT ROWID FROM '{ticker[:-5]}' ORDER BY ROWID DESC LIMIT 1)") # 기존의 마지막행 삭제
                update_df.to_sql(f'{ticker[:-5]}', conn, if_exists='append') #새로운 데이터 업데이트
                print(f"\t{update_count}데이터 업데이트")
            else: # 테이블이 존재하지 않음 => 데이터를 테이블에 저장하기
                print(f"{ticker[:-5]} 테이블이 존재하지 않습니다")
                # ticker의 ohlcv 값 sql에 저장하기
                btc = binance.fetch_ohlcv(ticker,timeframe='1m',since=None)
                df = pd.DataFrame(btc, columns=['index', 'open', 'high', 'low', 'close', 'volume']) # 가격 데이터 프래임 생성
                df['index'] = pd.to_datetime(df['index'], unit='ms')+ timedelta(hours=9) # 한국 시간으로 맞추기
                df.set_index('index', inplace=True) # 인덱스 설정

                df.to_sql(f'{ticker[:-5]}', conn) # sql 테이블에 저장하기
                print(f"\t {ticker[:-5]}데이터 저장 완료")
            
            time.sleep(0.2)
        except:
            print(f"{ticker} Error")
            time.sleep(0.1)

    conn.commit()
    conn.close()


def run():
    main_process()
