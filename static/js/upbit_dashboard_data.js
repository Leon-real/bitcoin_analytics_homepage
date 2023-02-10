let last_time // 업비트 거래+시간
let upbit_date // 업비트 거래 날짜
let upbit_time // 업비트 거래 시간
let current_price // 업비트 거래 가격
let premium_bitcoin // 비트코인 프리미엄
let binance_price; // 바이낸스 비트코인 가격 (USDT 기준)
let upbit_tickers={}; // 업비트 KRW마켓의 {이름과 티커라벨}
let upbit_ticker_codes='[{"ticket":"UNIQUE_TICKET"}'


// 소켓 통신 부분
let upbit_socket; // 업비트 소켓 통신

// bitcoin 타이핑 효과
const typing_text = 'Bitcoin ! ! !]          '
const main_text = $('.main_text')
let index = 0;

function typing_bitcoin() {
    main_text.text(main_text.text()+typing_text[index++]);
    if (index > typing_text.length){
        main_text.text("[")
        index = 0;
    }
}
setInterval(typing_bitcoin, 100)
// 타이핑 효과 


window.addEventListener('DOMContentLoaded', event => {
    // 업비트 api 부분
    setInterval(function () {
        // console.log('업비트 통신중')
        let arr = fetch('https://api.upbit.com/v1/ticker?markets=krw-btc')
            .then((response) => response.json())
            .then((response) => {
                upbit_date = parseInt(response[0]['trade_date']);
                upbit_time = parseInt(response[0]['trade_time'])+90000;
                current_price = response[0]['trade_price'];

                if (upbit_time >= 240000) {
                    upbit_time -= 240000
                    last_time = upbit_date.toString().substring(0,4) + '년 ' + 
                                upbit_date.toString().substring(4,6) + '월 ' + 
                                upbit_date.toString().substring(6,8) + '일 ' + 
                                upbit_time.toString().substring(0,2) + '시 ' + 
                                upbit_time.toString().substring(2,4) + '분 ' + 
                                upbit_time.toString().substring(4,6) + '초 '
                } else {
                    last_time = upbit_date.toString().substring(0,4) + '년 ' + 
                                upbit_date.toString().substring(4,6) + '월 ' + 
                                upbit_date.toString().substring(6,8) + '일 ' + 
                                upbit_time.toString().substring(0,2) + '시 ' + 
                                upbit_time.toString().substring(2,4) + '분 ' + 
                                upbit_time.toString().substring(4,6) + '초 '
                };
                $(".last-time").text(last_time)
                $(".current-price").text(current_price)
            })
        .catch((err) => console.error(err));
    }, 1000); // 1초마다 갱신

    // 환율 부분
    //환율 정보 초기에 한번 업데이트 해주기
    console.log("[Update Exchange Rate]")
    fetch('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD')
        .then((response) => response.json())
        .then((response) => {
            console.log('[Update : Exchange Rate]'+response[0]['basePrice'])
            $('.exchange-rate').text(response[0]['basePrice'])
        })
        .catch((err) => console.error(err));
    setInterval(function () {
        console.log("[Update Exchange Rate]")
        fetch('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD')
            .then((response) => response.json())
            .then((response) => {
                console.log('[Update : Exchange Rate]'+response[0]['basePrice'])
                $('.exchange-rate').text(response[0]['basePrice'])
            })
            .catch((err) => console.error(err));
    }, 1000*60*60); // 한시간마다 갱신

    // 비트코인 김프 => (한국 비트코인가격 / 미국 비트코인 가격) * 환율 * 100 - 100
    setInterval(function () {
        fetch('https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=1')
            .then((response) => response.json())
            .then((response) => {
                // console.log(response[0]['price'])
                binance_price = parseInt(response[0]['price']) //바이낸스 가격
            })
            .catch((err) => console.error(err));
            
            let current_price = parseInt($('.current-price').text()); // 현재 가격 html에서 가져오기(업비트)
            let exchange_rate = parseInt($('.exchange-rate').text()); // 현재 환률 html에서 가져오기
            // console.log("김프테스트")
            let premium_price = ((current_price / (binance_price * exchange_rate) * 100) - 100).toFixed(2);
            // console.log(parseFloat(premium_price))
            
            // 김프 플러스일 때 +기호 붙여주기
            if (parseFloat(premium_price) > 0){
                premium_price = "+ " + premium_price;
                $('.premium_bitcoin').text(premium_price).css('color','red');
            } else if (parseFloat(premium_price) < 0){
                premium_price = premium_price;
                $('.premium_bitcoin').text(premium_price).css('color','blue');
            } else {
                premium_price = premium_price;
                $('.premium_bitcoin').text(premium_price);
            };

    }, 3000); // 3초에 한번씩 갱신
    
    // 고래 체결량 가격 차이 발생시 삭제해주기 4% 이하로 체결된 가격 있으면 초기화 시키기
    setInterval(function () {
        for (let ticker in upbit_tickers){
            // console.log(upbit_tickers[ticker])
            let temp_1 = $(".table_price_"+upbit_tickers[ticker]).text();
            let temp_2 = $(".table_bigwhale_"+upbit_tickers[ticker]).text();
            if (temp_2 !== ' - '){
                temp_2 = temp_2.split(" ")[0]
                if (temp_1 < (temp_2 *0.96)){ // 4% 아래에서 체결될 때 삭제
                    $(".table_bigwhale_"+upbit_tickers[ticker]).text(" - ");
                    console.log(temp_1, temp_2);
                }
            };
        };
    }, 1000);
});

// 업비트 소켓 통신 함수
const listOfTickers = document.getElementById('coin_lists');// 업비트 티커 정보 보여줄 부분 만들기

function upbit_web_socket(){ // 업비트 소켓 통신 함수 부분
    // 웹소켓 연결
    function connectWS() {
        if(upbit_socket != undefined){
            upbit_socket.close();
        }
        upbit_socket = new WebSocket("wss://api.upbit.com/websocket/v1");
        upbit_socket.binaryType = 'arraybuffer';
        upbit_socket.onopen 	= function(e){
            filterRequest(upbit_ticker_codes
            )//'[{"ticket":"UNIQUE_TICKET"},{"type":"ticker","codes":["KRW-BTC"]},{"type":"ticker","codes":["KRW-ETH"]}]'
        }
        upbit_socket.onclose 	= function(e){ 
            upbit_socket = undefined; 
        }
        upbit_socket.onmessage= function(e){ 
            let enc = new TextDecoder("utf-8");
            let arr = new Uint8Array(e.data);
            let str_d = enc.decode(arr);
            let d = JSON.parse(str_d);
            coinListSetup(d);

        }	
    }
    // 웹소켓 연결 해제
    function closeWS() {
        if(upbit_socket != undefined){
            upbit_socket.close();
            upbit_socket = undefined;
        }	
    }
    // 웹소켓 요청
    function filterRequest(filter) {
        if(upbit_socket == undefined){
            alert('no connect exists');
            return;
        }
        upbit_socket.send(filter);
    }
    // 코인 리스트 실시간 업데이트 하기
    function coinListSetup(tickerJsonData){
        // console.log(tickerJsonData)
        // console.log(tickerJsonData['trade_date'])
        // console.log(tickerJsonData['trade_time'])
        for (const [key, value] of Object.entries(upbit_tickers)){
            // console.log(`${key}: ${value}`);
            // 가격, 가격등락 퍼센트, 가격등락 액수, 전날대비 시장 상황 표시
            if (tickerJsonData.code == value && tickerJsonData.type == 'ticker'){ // 키값이 같을 경우
                // console.log(value)
                // + - 일 때의 가격 색깔 조정하기
                if (tickerJsonData['change'] == 'RISE'){
                    $(".table_change_price_" + value).text(tickerJsonData['change_price']).css('color','red');
                    $(".table_change_rate_" + value).text(tickerJsonData['change_rate']).css('color','red');
                } else if (tickerJsonData['change'] == 'FALL') {
                    $(".table_change_price_" + value).text(tickerJsonData['change_price']).css('color','blue');
                    $(".table_change_rate_" + value).text(tickerJsonData['change_rate']).css('color','blue');
                } else if (tickerJsonData['change'] == 'EVEN') {
                };
                // 값 넣어주기
                $(".table_price_" + value).text(tickerJsonData['trade_price']);
                $(".table_change_rate_" + value).text((tickerJsonData['change_rate']*100).toFixed(2)+' %');
                $(".table_change_price_" + value).text(tickerJsonData['change_price']);
                $(".table_market_" + value).text(tickerJsonData['change']);
            };
            // 고래 체결량 표시
            if (tickerJsonData.code == value && tickerJsonData.type == 'trade') {
                // console.log(console.log(tickerJsonData))
                // 한번에 3000만원 이상 그리고 매수로 거래하였을 때
                if ((tickerJsonData['trade_price'] * tickerJsonData['trade_volume']) > 30000000 && tickerJsonData['ask_bid']=='ASK') {
                    // console.log(tickerJsonData['code'])
                    // console.log(tickerJsonData['trade_price'] * tickerJsonData['trade_volume'].toFixed(2));
                    $(".table_bigwhale_"+value).text(tickerJsonData['trade_price']+' ('+tickerJsonData['trade_volume'].toFixed(2).toString()+')')
                };
            };
        };
    };
    // 웹소켓 연결 시작
    connectWS();
};
// 업비트 마켓 정보 가지고 오기
(function () {
    let arr = fetch('https://api.upbit.com/v1/market/all')
            .then((response) => response.json())
            .then((response) => {
                // console.log(response)
                for (let key in response){
                    if (response[key]['market'].includes("KRW")){
                        // console.log(response[key]['market'], response[key]['korean_name'])
                        upbit_tickers[response[key]['korean_name']] = response[key]['market'];
                        upbit_ticker_codes += ',{"type":"ticker","codes":["' + response[key]['market'] +
                                                '"]},{"type":"trade","codes":["'+  response[key]['market'] +'"]}';
                        
                        listOfTickers.innerHTML += '<tr>'+
                            '<td class =table_name_'+response[key]['market']+'>'+response[key]['korean_name']+'</td>'+
                            '<td class =table_price_'+response[key]['market']+'>'+0+'</td>'+
                            '<td class =table_change_rate_'+response[key]['market']+'>'+'0'+'</td>'+
                            '<td class =table_change_price_'+response[key]['market']+'>'+'0'+'</td>'+
                            '<td class =table_market_'+response[key]['market']+'>'+'0'+'</td>'+
                            '<td class =table_bigwhale_'+response[key]['market']+'>'+' - '+'</td>'+
                                                '</th>';
                    };
                    if (key == response.length-1){
                        upbit_ticker_codes+=']'
                    };
                    
                
                };
                // console.log(upbit_ticker_codes)
            })
        .catch((err) => console.error(err));
})();

upbit_web_socket(); // 업비트 소켓 통신하기

