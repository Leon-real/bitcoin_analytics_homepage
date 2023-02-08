let last_time // 업비트 거래+시간
let upbit_date // 업비트 거래 날짜
let upbit_time // 업비트 거래 시간
let current_price // 업비트 거래 가격
let premium_bitcoin // 비트코인 프리미엄
let binance_price; // 바이낸스 비트코인 가격 (USDT 기준)

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
// 타이핑 효과 끝






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
            let premium_price = ((current_price / (binance_price * exchange_rate) * 100) - 100).toFixed(2)
            // console.log(parseFloat(premium_price))
            
            // 김프 플러스일 때 +기호 붙여주기
            if (parseFloat(premium_price) > 0){
                premium_price = "+ " + premium_price
            } else {
                premium_price = premium_price
            }
            
            $('.premium_bitcoin').text(premium_price)

        }, 3000); // 3초에 한번씩 갱신

});
