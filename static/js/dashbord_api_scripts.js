// setinetval 함수 한번 실행시키고 그다음부터 시간당 반복되도록 설정
function startInterval(callback, time) {
    callback();
    return setInterval(callback, time);
};

window.addEventListener('DOMContentLoaded', event => {
    // API
    // Fear & Greed API 12시간에 한번씩 업데이트
    startInterval(function () {
        const FearAndGreedAPI = {
        method: "get"
        };
        fetch("https://api.alternative.me/fng/?limit=1", FearAndGreedAPI)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const value = data.data[0]['value'] // api value 값 가져오기
                console.log(value)
                document.getElementById('FearAndGreedData').innerHTML = value
            })
            .catch(error => console.log(error));
    }, 1000*60*60*12); 
    
    // Dominance 1시간에 한번씩 업데이트 (비트코인, 이더리움, 비엔비, USDT, USDC) 도미넌스 나타냄
    startInterval(function () {
    const dominanceOfBtcIndex = {
        method: "get"
        };
        fetch("https://api.coingecko.com/api/v3/global", dominanceOfBtcIndex)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const value = data.data['market_cap_percentage'] // api value 값 가져오기 => 도미넌스 값 추출
                // console.log(value)
                let btc_dominance_index = parseFloat(value['btc']).toFixed(2)
                let eth_dominance_index = parseFloat(value['eth']).toFixed(2)
                let bnb_dominance_index = parseFloat(value['bnb']).toFixed(2)
                let usdt_dominance_index = parseFloat(value['usdt']).toFixed(2)
                let usdc_dominance_index = parseFloat(value['usdc']).toFixed(2)
                // console.log(btc_dominance_index, eth_dominance_index, bnb_dominance_index, usdt_dominance_index, usdc_dominance_index)
                
                // 데이터 넣기
                document.getElementById('DominaceIndecOfBtc').innerHTML = btc_dominance_index
                document.getElementById('DominaceIndecOfEth').innerHTML = eth_dominance_index
                document.getElementById('DominaceIndecOfBnb').innerHTML = bnb_dominance_index
                document.getElementById('DominaceIndecOfUSDT').innerHTML = usdt_dominance_index
                document.getElementById('DominaceIndecOfUSDC').innerHTML = usdc_dominance_index
                
            })
            .catch(error => console.log(error));
    }, 1000*60*60); // 12시간에 한번씩 업데이트
    
    //RSI => 30분마다 갱신(30분봉으로 갱신한다)
    startInterval(function () {
        const rsi_index_of_30_days = {
            method: "get"
            };
            fetch("https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1", rsi_index_of_30_days)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const close_prices=data.map(data => data[4]);
                // console.log(close_prices);
                
                // rsi 계산해주기
                const rsi = calculateRSI(close_prices).toFixed(2);
                
                // 데이터 넣기
                document.getElementById('RsiIndexOf30Days').innerHTML = rsi
            })
            .catch(error => console.log(error));
        }, 1000*60*30); // 30분에 한번씩 업데이트
});


// rsi 계산해주기 인자값으로 종가 배열을 받는다.
function calculateRSI(closingPrices) {
    // Calculate the average of the upward price changes
    let avgUpwardChange = 0;
    for (let i = 1; i < closingPrices.length; i++) {
        avgUpwardChange += Math.max(0, closingPrices[i] - closingPrices[i - 1]);
    }
    avgUpwardChange /= closingPrices.length;

    // Calculate the average of the downward price changes
    let avgDownwardChange = 0;
    for (let i = 1; i < closingPrices.length; i++) {
        avgDownwardChange += Math.max(0, closingPrices[i - 1] - closingPrices[i]);
    }
    avgDownwardChange /= closingPrices.length;

    // Calculate the RSI
    const rsi = 100 - (100 / (1 + (avgUpwardChange / avgDownwardChange)));

    return rsi;
}