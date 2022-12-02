from multiprocessing import Pool
import time
import upbit_bitcoin_price
import binance_bitcoin_price
from datetime import datetime

if __name__ == '__main__':
    

    while True:
        p = Pool(2)
        start = time.time()
        print(f"업데이트 시작 시간 : {datetime.now()}")
        get_upbit = p.apply_async(upbit_bitcoin_price.run)
        get_binance = p.apply_async(binance_bitcoin_price.run)

        p.close()
        p.join()

        print(f"업데이트에 소요된 시간 : {time.time()-start}")
        print()