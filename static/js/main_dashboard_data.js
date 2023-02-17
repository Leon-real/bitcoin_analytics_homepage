

window.addEventListener('DOMContentLoaded', event => {
    // Dashboard Summary Charts
    const dashbordObject1 = document.body.querySelector('#dashbordObject_1');
    const dashbordObject2 = document.body.querySelector('#dashbordObject_2');
    const dashbordObject3 = document.body.querySelector('#dashbordObject_3');
    const dashbordObject4 = document.body.querySelector('#dashbordObject_4');
    if (dashbordObject1) {
        dashbordObject1.addEventListener('click', event => {
            console.log('공포 / 탐욕 지수 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '공포 / 탐욕 지수 차트'
        });
    }
    if (dashbordObject2) {
        dashbordObject2.addEventListener('click', event => {
            console.log('강도 지수 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '상대 강도 지수 차트'
        });
    }
    if (dashbordObject3) {
        dashbordObject3.addEventListener('click', event => {
            console.log('시장 트렌드 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '시장 트렌드 차트'
        });
    }
    if (dashbordObject4) {
        dashbordObject4.addEventListener('click', event => {
            console.log('비트코인 도미넌스 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '비트코인 도미넌스 차트'
        });
    }

});


let binance_future_data; // 바이낸스 선물 데이터 현재 가격
let binance_spot_data; // 바이낸스 현물 데이터 현재 가격
let upbit_spot_data; // 업비트 현물 데이터 현재 가격
// 바이낸스 선물 데이터 {티커:현재가격} 가지고 오기
function binance_data(binance_data) {
    let temp_data_set = new Object(); //임시 데이터 저장소
    for (const [key, value] of Object.entries(binance_data)) {
        // 선물 데이터
        if (value['s'].includes('USDT')) {
            // console.log(value['s'], value['c'], value['P'], value['p'], value['Q']);
            temp_data_set[value['s'].replace('USDT','')] = parseFloat(value['c'])
        };
    };
    return temp_data_set
};
// 업비트 데이터 {티커:현재가격} 가지고 오기 및 테이블에 적어주기
function upbit_data_processing(upbit_data) {
    let temp_single_data_set = new Object(); //임시 데이터 저장소
    let temp_name;
    // console.log(upbit_data);
    for (const [key, value] of Object.entries(upbit_tickers)){
        // console.log(`${key}: ${value}`);
        if (upbit_data.code.replace("KRW-",'') == value && upbit_data.type == 'ticker'){ // 키값이 같을 경우
            temp_name = value.replace('USDT',"").replace("KRW-","");
            // console.log(value, upbit_data['trade_price'], upbit_data['change'])
            temp_single_data_set[temp_name] = upbit_data['trade_price']
        };
    };
    $('.table_current_price_'+temp_name).text(temp_single_data_set[temp_name])
    return temp_single_data_set
};
// 바이낸스 현물 가격 테이블에 적어주기
function binance_spot_data_processing(binance_data) {
    let exchange_rate_price = parseFloat($('.exchange-rate').text());
    for (const [key,price] of Object.entries(binance_data)) {
        // 해외 가격에 적어주기
        $('.table_current_abroad_price_'+key).text(price)
        // 김치 프리미엄 적어주기
        const foregine_price = price * exchange_rate_price
        const premiun_price =  ((($('.table_current_price_'+key).text() / foregine_price) * 100) - 100).toFixed(2);
        // console.log(exchange_rate_price, foregine_price, premiun_price)
        $('.table_premium_price_'+key).text(premiun_price)

    };
};
// 데이터 처리해주기 {티커명:현재가}
setTimeout(function() {
    setInterval(function() {
        binance_spot_data = binance_data(binance_socket_spot_datas);
        binance_future_data = binance_data(binance_socket_future_datas);
        upbit_spot_data = upbit_data_processing(upbit_socket_datas);

        binance_spot_data_processing(binance_spot_data);
    },100);
},3000);

// 김치 프리미엄 테이블 만들기
const listOfTickers = document.getElementById('coin_lists_table_body');// 바이낸스 티커 정보 보여줄 부분 만들기
const listOfTickers_future_top_10 = document.getElementById('future_top_10_table_body');// 바이낸스 티커 정보 보여줄 부분 만들기
const listOfTickers_spot_top_10 = document.getElementById('spot_top_10_table_body');// 바이낸스 티커 정보 보여줄 부분 만들기
setTimeout((function () {
    // 김치프리미엄 테이블 만들기, 현물 상승률 탑10 테이블 만들기
    for (let i in upbit_tickers){
        let before_replace = upbit_tickers[i];
        upbit_tickers[i] = upbit_tickers[i].replace("KRW-","");
        listOfTickers.innerHTML += '<tr>'+
                                        '<td class = table_name_'+upbit_tickers[i]+' id='+upbit_tickers[i]+'>'+i+'</td>'+
                                        '<td class =table_current_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                        '<td class =table_current_abroad_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                        '<td class =table_premium_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                    '</tr>';
    }
    //     listOfTickers_spot_top_10.innerHTML += '<tr>'+
    //                                 '<td class = spot_top_table_name_'+upbit_tickers[i]+' id=spot_top_10_'+upbit_tickers[i]+'>'+i+'</td>'+
    //                                 '<td class = spot_top_table_current_price_'+upbit_tickers[i]+'>'+0+'</td>'+
    //                                 '<td class = spot_top_table_raise_percent'+upbit_tickers[i]+'>'+0+'</td>'+
    //                             '</tr>';
    // };
    // // 선물 상승률 탑 10 데이터 만들기
    // for (let i in binance_tickers) {
    //     let temp_name = i.replace("USDT",'');
    //     listOfTickers_future_top_10.innerHTML += '<tr>'+
    //                                 '<td class = future_top_table_name_'+temp_name+' id=future_top_10_'+temp_name+'>'+temp_name+'</td>'+
    //                                 '<td class = future_top_table_current_price_'+temp_name+'>'+0+'</td>'+
    //                                 '<td class = future_top_table_raise_percent'+temp_name+'>'+0+'</td>'+
    //                             '</tr>';
    // };
}), 1500); // 3초 뒤에 테이블 만들기 (왜냐하면 데이터 동신이 너무 빠르다보니 빈 값으로 테이블을 만들면 값이 안만들어지는 경우가 있기 때문에)

