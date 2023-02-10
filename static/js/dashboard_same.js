// upbit, binance에고 공통으로 필요로 하는 데이터 js 관리


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