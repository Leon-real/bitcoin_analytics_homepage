let last_time // 업비트 거래+시간
let current_price // 업비트 거래 가격
let premium_bitcoin // 비트코인 프리미엄
let binance_price; // 바이낸스 비트코인 가격 (USDT 기준)


window.addEventListener('DOMContentLoaded', event => {
    // 현재 시간 및 비트코인 현재 가격
    setInterval(function () {
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        // let day = today.getDay();  // 요일
        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분
        let seconds = today.getSeconds();  // 초
        // let milliseconds = today.getMilliseconds(); // 밀리초

        last_time = year+'년 '+month+'월 '+date+'일 '+hours+'시 '+minutes+'분 '+seconds+'초'
        current_price = $('.table_price_KRW-BTC').text()
        $(".last-time").text(last_time)
        $(".current-price").text(current_price)
    }, 1000); // 1초마다 갱신
    // 비트코인 김프 => (한국 비트코인가격 / 미국 비트코인 가격) * 환율 * 100 - 100
    setInterval(function () {
        for (const [key,value] of Object.entries(binance_socket_spot_datas)) {
            // s : symbol
            // c : last price
            if (value['s'].includes('BTCUSDT')) { //USDT라는 글자가 있을 경우
                if (value['s'].includes("_")){
                    continue;
                };
                // console.log(value['s'], value['c'], typeof(value['c']))
                let current_price = parseInt($('.current-price').text()); // 현재 가격 html에서 가져오기(업비트)
                let exchange_rate = parseInt($('.exchange-rate').text()); // 현재 환률 html에서 가져오기
                binance_price = parseFloat(value['c']);

                let premium_price = ((current_price / (binance_price * exchange_rate) * 100) - 100).toFixed(2);
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
            };
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
                $(".table_change_rate_" + value).text((tickerJsonData['change_rate']*100).toFixed(2)+' %').css('color','red');
            } else if (tickerJsonData['change'] == 'FALL') {
                $(".table_change_price_" + value).text("-"+tickerJsonData['change_price']).css('color','blue');
                $(".table_change_rate_" + value).text("-"+(tickerJsonData['change_rate']*100).toFixed(2)+' %').css('color','blue');
            } else if (tickerJsonData['change'] == 'EVEN') {
            };
            // 값 넣어주기
            $(".table_price_" + value).text(tickerJsonData['trade_price']);
            $(".table_market_" + value).text(tickerJsonData['change']);
        };
        // 고래 체결량 표시
        if (tickerJsonData.code == value && tickerJsonData.type == 'trade') {
            // console.log(console.log(tickerJsonData))
            // 한번에 3000만원 이상 그리고 매수로 거래하였을 때
            if ((tickerJsonData['trade_price'] * tickerJsonData['trade_volume']) > 30000000 && tickerJsonData['ask_bid']=='ASK') {
                // console.log(tickerJsonData['code'])
                // console.log(tickerJsonData['trade_price'] * tickerJsonData['trade_volume'].toFixed(2));
                console.log("고래 출현 : "+tickerJsonData['trade_price'])
                $(".table_bigwhale_"+value).text(tickerJsonData['trade_price']+' ('+tickerJsonData['trade_volume'].toFixed(2).toString()+')')
            };
        };
    };
};
setTimeout(function() {
    setInterval(function () {
        coinListSetup(upbit_socket_datas);
    },100);
}, 1500);

// 업비트 마켓 정보 가지고 오기 및 table 만들기
const listOfTickers = document.getElementById('coin_lists_table_body');// 업비트 티커 정보 보여줄 부분 만들기
setTimeout((function () {
    for (let i in upbit_tickers){
        listOfTickers.innerHTML += '<tr>'+
                                        '<td class =table_name_'+upbit_tickers[i]+'>'+i+'</td>'+
                                        '<td class =table_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                        '<td class =table_change_rate_'+upbit_tickers[i]+'>'+'0'+'</td>'+
                                        '<td class =table_change_price_'+upbit_tickers[i]+'>'+'0'+'</td>'+
                                        '<td class =table_market_'+upbit_tickers[i]+'>'+'0'+'</td>'+
                                        '<td class =table_bigwhale_'+upbit_tickers[i]+'>'+' - '+'</td>'+
                                    '</tr>';
    };
}), 1500); // 3초 뒤에 테이블 만들기 (왜냐하면 데이터 동신이 너무 빠르다보니 빈 값으로 테이블을 만들면 값이 안만들어지는 경우가 있기 때문에)