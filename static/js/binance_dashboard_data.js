window.addEventListener('DOMContentLoaded', event => {
    // 고래 체결량 가격 차이 발생시 삭제해주기 4% 이하로 체결된 가격 있으면 초기화 시키기
    setInterval(function () {
        for (let i in binance_tickers){
            let before_replace = i;
            i = i.replace("USDT","");
            // console.log(upbit_tickers[ticker])
            let temp_1 = $(".table_price_"+i).text();
            let temp_2 = $(".table_bigwhale_"+i).text();
            if (temp_2.length > 1 ){
                temp_2 = temp_2.split(" ")[0]
                if (temp_2.includes('-')) {
                    if (temp_1 > (temp_2 *1.04)){ // 4% 아래에서 체결될 때 삭제
                        $(".table_bigwhale_"+i).text(" - ");
                        console.log(temp_1, temp_2);
                    } else {
                        if (temp_1 < (temp_2 *0.96)){ // 4% 아래에서 체결될 때 삭제
                            $(".table_bigwhale_"+i).text(" - ");
                            console.log(temp_1, temp_2)};
                    };
                };
            };
        };
    }, 1000);
});


// 바이낸스 소켓 통신 함수 부분
function binance_web_socket(){ 
    // console.log("Start binance . . . Socket")
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
                // console.log(value['s'], value['n'], value['Q'], value['p'], Math.abs(parseFloat(value['Q'])*parseFloat(value['p'])));
                // 색깔 조건 설정
                if (parseFloat(value['P']) > 0){
                    $(".table_change_rate_" + value['s'].replace("USDT",'')).text(parseFloat(value['P']).toFixed(2)+' %').css('color','#00DD00');
                    $(".table_change_price_" + value['s'].replace("USDT",'')).text(parseFloat(value['p'])).css('color','#00DD00');
                } else if (parseFloat(value['P']) < 0) {
                    $(".table_change_rate_" + value['s'].replace("USDT",'')).text(parseFloat(value['P']).toFixed(2)+' %').css('color','red');
                    $(".table_change_price_" + value['s'].replace("USDT",'')).text(parseFloat(value['p'])).css('color','red');
                };
                // 고래 체결 가격 (5 만달러 이상인 경우 =약 7천만원)
                if (Math.abs(parseFloat(value['Q'])*parseFloat(value['p'])) >50000) {
                    console.log("고래 출현 : " + value['Q'])
                    $(".table_bigwhale_"+value['s'].replace("USDT",'')).text(value['p']+' ('+value['Q']+')')
                }
                // 값 넣어주기
                $(".table_price_" + value['s'].replace("USDT",'')).text(parseFloat(value['c']));
                $(".quantity_" + value['s'].replace("USDT",'')).text(parseFloat(value['Q']));
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
        let before_replace = i;
        i = i.replace("USDT","");
        listOfTickers.innerHTML += '<tr>'+
                                        '<td class =table_name_'+i+'>'+i+'</td>'+
                                        '<td class =table_price_'+i+'>'+binance_tickers[before_replace]+'</td>'+
                                        '<td class =table_change_rate_'+i+'>'+'0'+'</td>'+
                                        '<td class =table_change_price_'+i+'>'+'0'+'</td>'+
                                        '<td class =quantity_'+i+'>'+'0'+'</td>'+
                                        '<td class =table_bigwhale_'+i+'>'+' - '+'</td>'+
                                    '</tr>';
    };
}), 1500); // 3초 뒤에 테이블 만들기 (왜냐하면 데이터 동신이 너무 빠르다보니 빈 값으로 테이블을 만들면 값이 안만들어지는 경우가 있기 때문에)

// 바이낸스 테이블 정렬하기
$('th').each(function (column) {
    $(this).click(function () {
        if ($(this).is('.asc')) {
            $(this).removeClass('asc');
            $(this).addClass('desc');
            sortdir = -1;
        } else {
            $(this).addClass('asc');
            $(this).removeClass('desc');
            sortdir = 1;
        }
        $(this).siblings().removeClass('asc');
        $(this).siblings().removeClass('desc');

        var rec = $('table').find('tbody>tr').get();
        rec.sort(function (a, b) {
            var val1 = $(a).children('td').eq(column).text().toUpperCase().replace(" %","");
            var val2 = $(b).children('td').eq(column).text().toUpperCase().replace(" %","");
            if (isNaN(val1) || isNaN(val2)){
                return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
            }
            else {
                return (parseFloat(val1) < parseFloat(val2)) ? -sortdir : (parseFloat(val1) > parseFloat(val2)) ? sortdir : 0;
            }
        });
        $.each(rec, function (index, row) {
            $('tbody').append(row);
        });
    });
});
// 정렬 값 고정하여서 자동 갱신
setInterval(function () {
    // console.log("t")
    $('th').each(function (column){
        // console.log("자동 정렬 실행", $(this).is('.asc'), ($(this).is('.desc')))
        
        if ($(this).is('.asc')) {
            sortdir = 1;
            var rec = $('table').find('tbody>tr').get();
            rec.sort(function (a, b) {
                var val1 = $(a).children('td').eq(column).text().toUpperCase().replace(" %","");
                var val2 = $(b).children('td').eq(column).text().toUpperCase().replace(" %","");
                if (isNaN(val1) || isNaN(val2)){
                    return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
                }
                else {
                    return (parseFloat(val1) < parseFloat(val2)) ? -sortdir : (parseFloat(val1) > parseFloat(val2)) ? sortdir : 0;
                }
            });
            $.each(rec, function (index, row) {
                $('tbody').append(row);
            });
        } else if (($(this).is('.desc'))) {
            sortdir = -1;
            
            var rec = $('table').find('tbody>tr').get();
            rec.sort(function (a, b) {
                var val1 = $(a).children('td').eq(column).text().toUpperCase().replace(" %","");
                var val2 = $(b).children('td').eq(column).text().toUpperCase().replace(" %","");
                if (isNaN(val1) || isNaN(val2)){
                    return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
                }
                else {
                    return (parseFloat(val1) < parseFloat(val2)) ? -sortdir : (parseFloat(val1) > parseFloat(val2)) ? sortdir : 0;
                }
            });
            $.each(rec, function (index, row) {
                $('tbody').append(row);
            });
        }
    });
}, 100);
