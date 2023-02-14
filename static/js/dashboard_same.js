// upbit, binance에고 공통으로 필요로 하는 데이터 js 관리
let binance_tickers={}; // 바이낸스 KRW마켓의 {이름과 티커라벨}
let upbit_tickers={}; // 업비트 KRW마켓의 {이름과 티커라벨}
let upbit_ticker_codes='[{"ticket":"UNIQUE_TICKET"}' // upbit web socket filterRequest
let binance_soc_data; // 바이낸스 소켓통신 데이터

// bitcoin 타이핑 효과
const typing_text = 'Bitcoin ! ! !]          ';
const main_text = $('.main_text');
const sub_main_text = $('.sub_main_text').text();
let index = 0;
function typing_bitcoin() {
    main_text.text(main_text.text()+typing_text[index++]);
    if (index > typing_text.length){
        main_text.text("["+sub_main_text)
        index = 0;
    }
};
setInterval(typing_bitcoin, 100);
// 타이핑 효과 

// 환율 업데이트
window.addEventListener('DOMContentLoaded', event => {
    // 환율 부분
    //환율 정보 초기에 한번 업데이트 해주기
    // console.log("[Update Exchange Rate]")
    fetch('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD')
        .then((response) => response.json())
        .then((response) => {
            console.log('[Update : Exchange Rate]'+response[0]['basePrice'])
            $('.exchange-rate').text(response[0]['basePrice'])
        })
        .catch((err) => console.error(err));
    setInterval(function () {
        // console.log("[Update Exchange Rate]")
        fetch('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD')
            .then((response) => response.json())
            .then((response) => {
                console.log('[Update : Exchange Rate]'+response[0]['basePrice'])
                $('.exchange-rate').text(response[0]['basePrice'])
            })
            .catch((err) => console.error(err));
    }, 1000*60*60); // 한시간마다 갱신
});

// 업비트 api 받아서 한국:티커이름 짝지어 주기
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
                    };
                    if (key == response.length-1){
                        upbit_ticker_codes+=']'
                    };
                };
                // console.log(upbit_ticker_codes)
            })
        .catch((err) => console.error(err));
})();
// 바이낸스 api 받아서 티커:현재 가격 짝지어 주기
(function () {
    let arr = fetch('https://fapi.binance.com/fapi/v1/ticker/price')
            .then((response) => response.json())
            .then((response) => {
                // console.log(response)
                for (let key in response){
                    // console.log(response[key]['symbol'])
                    if (response[key]['symbol'].includes("_")){
                        continue;
                    }
                    if (response[key]['symbol'].includes("USDT")){
                        binance_tickers[response[key]['symbol']] = response[key]['price'];
                    };
                };
            })
        .catch((err) => console.error(err));
})();