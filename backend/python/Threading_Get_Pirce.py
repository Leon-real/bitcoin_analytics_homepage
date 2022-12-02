from multiprocessing import Pool
import time
import upbit_bitcoin_price
import binance_bitcoin_price


if __name__ == '__main__':
    p = Pool(2)
    start = time.time()


    get_upbit = p.apply_async(upbit_bitcoin_price.run)
    get_binance = p.apply_async(binance_bitcoin_price.run)

    p.close()
    p.join()

    print(time.time()-start)