let upbit_date // 업비트 거래 날짜
let upbit_time // 업비트 거래 시간
let current_price // 업비트 거래 가격

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
                };
            })
            .catch((err) => console.error(err));
    }, 3000);

    
    
});



