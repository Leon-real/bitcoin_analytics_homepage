

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
                const value = data.data[0]['value']; // api value 값 가져오기
                // console.log(value)

                // //테두리 설정
                // if (value >= 50) {
                //     $('#FearAndGreedData').css('-webkit-text-stroke', '0.3px #52E252')
                //     $('#FearAndGreedData_End').css('-webkit-text-stroke', '0.3px #52E252')
                // } else {
                //     $('#FearAndGreedData').css('-webkit-text-stroke', '0.3px #FF0000')
                //     $('#FearAndGreedData_End').css('-webkit-text-stroke', '0.3px #FF0000')
                // };

                // 색상 설정
                let green_rate = parseInt(255 * (value /100));
                let red_rate = parseInt(255*(1 - (value / 100)));
                let hex_color_rate = '#'+rgbToHex(red_rate, green_rate, 100);
                // console.log(hex_color_rate)

                // 데이터 입력
                $('#FearAndGreedData').text(value).css('color', hex_color_rate);
                $('#FearAndGreedData_End').css('color', hex_color_rate);
                // document.getElementById('FearAndGreedData').innerHTML = value
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
                $('#DominaceIndecOfBtc').text(btc_dominance_index).css('color','#FF8200');
                $('#DominaceIndecOfEth').text(eth_dominance_index).css('color','#000000');
                $('#DominaceIndecOfBnb').text(bnb_dominance_index).css('color','#FAEB78');
                $('#DominaceIndecOfUSDT').text(usdt_dominance_index).css('color','#3CA03C');
                $('#DominaceIndecOfUSDC').text(usdc_dominance_index).css('color','#64A0FF');
                
            })
            .catch(error => console.log(error));
    }, 1000*60*60); // 12시간에 한번씩 업데이트
    
    //RSI, 생명선 => 30분마다 갱신(30분봉으로 갱신한다)
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
                // ema 계산해주기 => 생명선
                const ema = EMACalc(close_prices,20);
                let life_line; // 생명선
                let life_line_color; //생명선 색상
                let cal_percentOfLifeLine = parseFloat(close_prices[close_prices.length-1]).toFixed(2) / parseFloat(ema[ema.length-1]).toFixed(2);
                // console.log(cal_percentOfLifeLine)
                if (cal_percentOfLifeLine*100 <= 97) { //현재 가격이 EMA보다 3% 아래에 있는 경우
                    life_line = 'Under Life Line';
                    life_line_color = 'red';
                } else if (cal_percentOfLifeLine*100 >= 103 ) { // 현재 가격이 EMA보다 3% 위에 있는 경우
                    life_line = 'Above Life Line';
                    life_line_color = 'greed';
                } else {
                    life_line = 'Around Life Line';
                    life_line_color = 'black';
                }
                
                //테두리 설정
                // if (rsi >= 50) {
                //     $('#RsiIndexOf30Minutes').css('-webkit-text-stroke', '1px #52E252');
                //     $('#RsiIndexOf30Minutes_End').css('-webkit-text-stroke', '1px #52E252');
                // } else {
                //     $('#RsiIndexOf30Minutes').css('-webkit-text-stroke', '1px #FF0000');
                //     $('#RsiIndexOf30Minutes_End').css('-webkit-text-stroke', '1px #FF0000');
                // };

                // 데이터 넣기
                document.getElementById('RsiIndexOf30Minutes').innerHTML = rsi;
                document.getElementById('LifeIndexOfMarket').innerHTML = life_line;
                
                // 색상 옵션
                $('#LifeIndexOfMarket').css('color', life_line_color);
                
                
                // rsi 부분
                let green_rate = parseInt(255 * (rsi /100));
                let red_rate = parseInt(255*(1 - (rsi / 100)));
                let hex_color_rate = '#'+rgbToHex(red_rate, green_rate, 0)+'0';
                
                $('#RsiIndexOf30Minutes').css('color', hex_color_rate);
                $('#RsiIndexOf30Minutes_End').css('color', hex_color_rate);
            })
            .catch(error => console.log(error));
        }, 1000*60*30); // 30분에 한번씩 업데이트
});

/////////////////////////////////////////////////////////////////////////////
