// 바이낸스 소켓 통신 함수 부분
function binance_web_socket(){ 
    console.log("Start binance . . . Socket")
    // 바이낸스 소켓 연결
    function binance_connect(){
        // let binance_socket = new WebSocket('wss://stream.binance.com:443/ws/!miniTicker@arr'); // 현물
        let binance_socket = new WebSocket('wss://fstream.binance.com:443/ws/!ticker@arr'); // 선물

        binance_socket.onmessage = (e) =>{
            let d = JSON.parse(e.data);
            // console.log(d)
            coinListSetup(d);
        };
    };
    // 바이낸스 코인 리스트 셋업
    function coinListSetup(tickerJsonData){
        // console.log(tickerJsonData);
        for (const [key, value] of Object.entries(tickerJsonData)){
            // console.log(value)
            // n : total number of trade
            // s : symbol
            // p : price change
            // P : price cahange percent
            // c : last price
            // Q : last quantity
            if (value['s'].includes('USDT')) { //USDT라는 글자가 있을 경우
                // console.log(value['s'], value['c'], value['P'], value['p'], value['Q']);
                // // 색깔 조건 설정
                if (parseFloat(value['P']) > 0){
                    $(".table_change_rate_" + value['s']).text(parseFloat(value['P']).toFixed(2)+' %').css('color','#00DD00');
                    $(".table_change_price_" + value['s']).text(value['p']).css('color','#00DD00');
                } else if (parseFloat(value['P']) < 0) {
                    $(".table_change_rate_" + value['s']).text(parseFloat(value['P']).toFixed(2)+' %').css('color','red');
                    $(".table_change_price_" + value['s']).text(value['p']).css('color','red');
                };
                // 값 넣어주기
                $(".table_price_" + value['s']).text(value['c']);
                $(".table_change_rate_" + value['s']).text(parseFloat(value['P']).toFixed(2)+' %');
                $(".table_change_price_" + value['s']).text( value['p']);
                $(".quantity_" + value['s']).text(value['Q']);
            };
            // sortedTablePrice();
        };
    };

    // 연결 실행
    binance_connect();
};
binance_web_socket();

// binance_tickers 변수를 활용하여, 바이낸스 티커 정보 테이블 만들기
const listOfTickers = document.getElementById('coin_lists_table_body');// 바이낸스 티커 정보 보여줄 부분 만들기
setTimeout((function () {
    for (let i in binance_tickers){
        // console.log(i, binance_tickers[i])
        listOfTickers.innerHTML += '<tr>'+
            '<td class =table_name_'+i+'>'+i+'</td>'+
            '<td class =table_price_'+i+'>'+binance_tickers[i]+'</td>'+
            '<td class =table_change_rate_'+i+'>'+'0'+'</td>'+
            '<td class =table_change_price_'+i+'>'+'0'+'</td>'+
            '<td class =quantity_'+i+'>'+'0'+'</td>'+
            '<td class =table_bigwhale_'+i+'>'+' - '+'</td>'+
                            '</tr>';
    };
}), 1500); // 3초 뒤에 테이블 만들기 (왜냐하면 데이터 동신이 너무 빠르다보니 빈 값으로 테이블을 만들면 값이 안만들어지는 경우가 있기 때문에)

// 바이낸스 테이블 정렬하기

function sortedTablePrice() {
    console.log("table sorting test")
};