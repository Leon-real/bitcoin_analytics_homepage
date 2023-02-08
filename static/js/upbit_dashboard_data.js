let last_time // 업비트 거래+시간
let upbit_date // 업비트 거래 날짜
let upbit_time // 업비트 거래 시간
let current_price // 업비트 거래 가격


// bitcoin 타이핑 효과
const typing_text = 'Bitcoin ! ! !]'
const main_text = $('.main_text')
let index = 0;

function typing_bitcoin() {
    main_text.text(main_text.text()+typing_text[index++]);
    console.log(main_text)
    if (index > typing_text.length){
        main_text.text("[")
        index = 0;
    }
}
setInterval(typing_bitcoin, 100)
// 타이핑 효과 끝

window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const test_data = window.data_set_json;
    var testData = '안녕하세요';
    console.log(testData);
    console.log(test_data);
    
    // 업비트 api 부분
    setInterval(function () {
        console.log('업비트 통신중')
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
    }, 1000);

});
