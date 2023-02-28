

window.addEventListener('DOMContentLoaded', event => {
    
});

let binance_future_data; // 바이낸스 선물 데이터 현재 가격
let binance_spot_data; // 바이낸스 현물 데이터 현재 가격
let upbit_spot_data; // 업비트 현물 데이터 현재 가격
// 바이낸스 선물 데이터 {티커:현재가격} 가지고 오기
function binance_get_data(binance_data) {
    let temp_data_set = new Object(); //임시 데이터 저장소
    for (const [key, value] of Object.entries(binance_data)) {
        // console.log(value)
        // 선물 데이터
        if (value['s'].includes('USDT')) {
            // console.log(value['s'], value['c'], value['P'], value['p'], value['Q']);
            temp_data_set[value['s'].replace('USDT','')] = parseFloat(value['c'])
            let temp_per;
            // 선물 상승률 탑 10 테이블에 넣어주기
            if (typeof value['P'] == "undefined" || value['P'] == null || value['P'] == "") {
                temp_per = 0
            } else {
                temp_per = parseFloat(value['P']).toFixed(2)
            }
            // console.log(value['s'], value['P'], temp_per)
            $('.future_top_table_current_price_'+value['s'].replace("USDT","")).text(value['c']) // 가격
            $('.future_top_table_raise_percent'+value['s'].replace("USDT","")).text(temp_per) // 상승률
        };
    };
    return temp_data_set
};
// 업비트 데이터 {티커:현재가격} 가지고 오기 및 테이블에 적어주기, 시장 트랜드 적용해주기
function upbit_data_processing(upbit_data) {
    let temp_single_data_set = new Object(); //임시 데이터 저장소
    let temp_name;
    // console.log(upbit_data);
    for (const [key, value] of Object.entries(upbit_tickers)){
        // console.log(`${key}: ${value}`);
        if (upbit_data.code.replace("KRW-",'') == value && upbit_data.type == 'ticker'){ // 키값이 같을 경우
            temp_name = value.replace('USDT',"").replace("KRW-","");
            if (temp_name == 'BTC') {
                $('#current_bitcoin_price').text(parseFloat(upbit_data['trade_price']).toFixed(2).toLocaleString('ko-KR'))
            };
            // console.log(value, upbit_data['trade_price'], upbit_data['change'])
            temp_single_data_set[temp_name] = upbit_data['trade_price']
            // 현물 top 10 테이블에 넣어주기
            $('.spot_top_table_current_price_'+temp_name).text(upbit_data['trade_price'])
            $('.spot_top_table_raise_percent'+temp_name).text(upbit_data['signed_change_rate'].toFixed(2))

            // 시장 트랜드 적용하기 (비트코인 전날대비 어떠한지)
            if (value=='BTC' && upbit_data['change']=='RISE') { //상승
                $('#TrendIndexOfMarket').text('상승장 RISE').css('color','#00DD00');
            } else if (value=='BTC' && upbit_data['change']=='FALL') { // 하락
                $('#TrendIndexOfMarket').text('하락장 FALL').css('color','red');
            } else if (value=='BTC' && upbit_data['change']=='EVEN') { // 보합
                $('#TrendIndexOfMarket').text('횡보장 EVEN').css('color','black');
            };
        };
    };
    // 김치 프리미엄 테이블 현물 가격에 넣어주기
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
        let premiun_price =  ((($('.table_current_price_'+key).text() / foregine_price) * 100) - 100).toFixed(2);
        // console.log(exchange_rate_price, foregine_price, premiun_price)
        // -100% 인 경우 데이터 값 수정해주기
        if (premiun_price == -100.00){
            // console.log("value error", ((($('.table_current_price_'+key).text() / foregine_price) * 100) - 100).toFixed(2))
            // console.log(premiun_price, typeof(premiun_price))
            premiun_price = ((($('.table_current_price_'+key).text() / foregine_price) * 100).toFixed(2))
        }
        // 김치프리미엄 테이블에 데이터 넣어주기
        $('.table_premium_price_'+key).text(premiun_price)

        // 김치프리미엄의 양수 음수 여부에 따라 색상 변경해주기
        if (premiun_price > 0){// 양수일 경우
            $('.table_premium_price_'+key).text(premiun_price).css('color','#00DD00');
            // $('.table_current_price_'+key).css('color','#00DD00');
            // $('.table_current_abroad_price_'+key).css('color','#00DD00');
        } else if (premiun_price < 0) { // 음수일 경우
            $('.table_premium_price_'+key).text(premiun_price).css('color','red');
            // $('.table_current_price_'+key).css('color','red');
            // $('.table_current_abroad_price_'+key).css('color','red');
        };
        
    };
};
// 데이터 처리해주기 {티커명:현재가}
setTimeout(function() {
    setInterval(function() {
        binance_spot_data = binance_get_data(binance_socket_spot_datas);
        binance_future_data = binance_get_data(binance_socket_future_datas);
        upbit_spot_data = upbit_data_processing(upbit_socket_datas);

        binance_spot_data_processing(binance_spot_data);
    },100);
},3000);

// 김치 프리미엄 테이블 만들기
const listOfTickers = document.getElementById('coin_lists_table_body');// 김치프리미엄 테이블
const listOfTickers_future_top_10 = document.getElementById('future_top_10_table_body');// 선물 탑10 테이블
const listOfTickers_spot_top_10 = document.getElementById('spot_top_10_table_body');// 현물 탑10 테이블

setTimeout((function () {
    // 김치프리미엄 테이블 만들기, 현물 상승률 탑10 테이블 만들기
    let no_img_path = '../../../static/imgFolder/no.png' // 에러 이미지 경로 설정
    for (let i in upbit_tickers){
        let before_replace = upbit_tickers[i];
        upbit_tickers[i] = upbit_tickers[i].replace("KRW-","");
        listOfTickers.innerHTML += '<tr>'+
                                        '<td class = table_name_'+upbit_tickers[i]+' id='+upbit_tickers[i]+'>'+
                                        '<img src="https://static.upbit.com/logos/'+upbit_tickers[i]+'.png" onerror="this.src=\''+no_img_path+'\'"  width="20" height="20"/>'+
                                        i+' ('+upbit_tickers[i]+')'+
                                        '</td>'+
                                        '<td class =table_current_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                        '<td class =table_current_abroad_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                        '<td class =table_premium_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                    '</tr>';

        listOfTickers_spot_top_10.innerHTML += '<tr>'+
                                    '<td class = spot_top_table_name_'+upbit_tickers[i]+' id=spot_top_10_'+upbit_tickers[i]+'>'+
                                    '<img src="https://static.upbit.com/logos/'+upbit_tickers[i]+'.png" onerror="this.src=\''+no_img_path+'\'" width="20" height="20"/>'+
                                    i+' ('+upbit_tickers[i]+')'+
                                    '</td>'+
                                    '<td class = spot_top_table_current_price_'+upbit_tickers[i]+'>'+0+'</td>'+
                                    '<td class = spot_top_table_raise_percent'+upbit_tickers[i]+'>'+0+'</td>'+
                                '</tr>';
    };
    // 선물 상승률 탑 10 데이터 만들기
    for (let i in binance_tickers) {
        let temp_name = i.replace("USDT",'');
        listOfTickers_future_top_10.innerHTML += '<tr>'+
                                    '<td class = future_top_table_name_'+temp_name+' id=future_top_10_'+temp_name+'>'+
                                    // '<img src="https://static.upbit.com/logos/'+i+'.png" onerror="this.src=\''+no_img_path+'\'" width="20" height="20"/>'+
                                    '<img src="'+no_img_path+'" width="20" height="20"/>'+
                                    temp_name+
                                    '</td>'+
                                    '<td class = future_top_table_current_price_'+temp_name+'>'+0+'</td>'+
                                    '<td class = future_top_table_raise_percent'+temp_name+'>'+0+'</td>'+
                                '</tr>';
    };

}), 1500); // 3초 뒤에 테이블 만들기 (왜냐하면 데이터 동신이 너무 빠르다보니 빈 값으로 테이블을 만들면 값이 안만들어지는 경우가 있기 때문에)

