import sqlite3
import pandas as pd
import time
from datetime import datetime

# data = {0:['시간', '데이터1'], 1:['가격','데이터2'], 2:['기타','데이터3']}

# conn=sqlite3.connect('test.db') # db 연결
# cur = conn.cursor() # db 커서
# cur.execute('''CREATE TABLE IF NOT EXISTS test_data
#                     (id INTEGER, name TEXT PRIMARY KEY, content TEXT)''') # db 테이블 생성 (name text가 PRIMARY KEY 이므로 중복으로 데이터가 들어가지 않는다.)

# # cur.execute('''INSERT INTO test_data VALUES
# #                     (id integer, name text, content text)''') # db 테이블 생성

# for i in range(len(data)):
#     data_timeline = data[i][0]
#     data_data = data[i][1]

#     sql = f"INSERT OR IGNORE INTO test_data VALUES(?,?,?);"
#     cur.execute(sql, (i, data_timeline, data_data))
    
# conn.commit()
# # conn.close()

# df = pd.read_excel('KRW-BTC.xlsx')
# df.to_sql('BTC',conn, if_exists='replace', index = 0)