// setinetval 함수 한번 실행시키고 그다음부터 시간당 반복되도록 설정
function startInterval(callback, time) {
    callback();
    return setInterval(callback, time)
};

window.addEventListener('DOMContentLoaded', event => {
    // API
    // Fear & Greed API
    // 12시간에 한번씩 업데이트
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
    // Dominance
    setInterval(function () {
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
    }, 1000*60*60*12); // 12시간에 한번씩 업데이트
    
});
