// 김치 프리미엄 테이블 정렬하기
// console.log($('#premium_tr').children())
$('#premium_tr').children().each(function (column) {
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

        // var rec = $('table').find('tbody>tr').get();
        var rec = $('#coin_premium_lists_table').find('tbody>tr').get();
        
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
            $('#coin_lists_table_body').append(row);
        });
    });
});
// 정렬 값 고정하여서 자동 갱신
setInterval(function () {
    // console.log("t")
    // 김치 프리미엄 테이블 정렬 고정
    $('#premium_tr').children().each(function (column){
        // 정렬 부분 고정
        if ($(this).is('.asc')) {
            sortdir = 1;
            var rec = $('#coin_premium_lists_table').find('tbody>tr').get();
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
                $('#coin_lists_table_body').append(row);
            });
        } else if (($(this).is('.desc'))) {
            sortdir = -1;
            
            var rec = $('#coin_premium_lists_table').find('tbody>tr').get();
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
                $('#coin_lists_table_body').append(row);
            });
        }
    });
    // 김치 프리미엄 테이블 값이 0인 경우 숨김 처리
    (function() {
        if ($('#premium_search').val() == '') {
            var table_set = $('#coin_premium_lists_table')[0]
            var rowList = table_set.rows;
            // console.log(rowList)
            for (i=1; i<rowList.length; i++) {
                var row = rowList[i];     //thead 부분을 제외하기 위해 i가 1부터 시작됩니다.
                // var tdsNum = row.childElementCount;     //아래 for문에서 사용하기 위해 row 하위에 존재하는 td의 갯수를 구합니다.

                var ticker_name = row.cells[0].innerHTML;
                var ticker_spot_price = row.cells[1].innerHTML;
                var ticker_future_price = row.cells[2].innerHTML;
                var ticker_premium = row.cells[3].innerHTML;
                // 만약 현물 가격, 선물가격, 김치 프리미엄이 0인 경우 행 숨김 처리 해주기 
                if (ticker_spot_price==0 || ticker_future_price==0 || ticker_premium==0) {
                    row.style.display='none';
                } else {  // 전부 있을 경우 다시 보여주기
                    row.style.display='';
                }

                // console.log(ticker_name, ticker_spot_price, ticker_future_price, ticker_premium)
            };
        };
    }) ();

    // spot top 10 고정 정렬
    $('#spot_top_10_tr').children().each(function (column){
        // 정렬 부분 고정
        if ($(this).is('.asc')) {
            sortdir = 1;
            var rec = $('#spot_top_10_table').find('tbody>tr').get();
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
                $('#spot_top_10_table_body').append(row);
            });
        } else if (($(this).is('.desc'))) {
            sortdir = -1;
            
            var rec = $('#spot_top_10_table').find('tbody>tr').get();
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
                $('#spot_top_10_table_body').append(row);
            });
        }
    });
    // future top 10 고정 정렬
    $('#future_top_10_tr').children().each(function (column){
        // 정렬 부분 고정
        if ($(this).is('.asc')) {
            sortdir = 1;
            var rec = $('#future_top_10_table').find('tbody>tr').get();
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
                $('#future_top_10_table_body').append(row);
            });
        } else if (($(this).is('.desc'))) {
            sortdir = -1;
            
            var rec = $('#future_top_10_table').find('tbody>tr').get();
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
                $('#future_top_10_table_body').append(row);
            });
        }
    });
    // spot top 10 display only 10 tickers
    (function() {
        var table_set = $('#spot_top_10_table')[0]
        var rowList = table_set.rows;
        // console.log(rowList)
        for (i=1; i<rowList.length; i++) {
            var row = rowList[i];     //thead 부분을 제외하기 위해 i가 1부터 시작됩니다.
            // var tdsNum = row.childElementCount;     //아래 for문에서 사용하기 위해 row 하위에 존재하는 td의 갯수를 구합니다.
            var ticker_name = row.cells[0].innerHTML; // 코인
            var ticker_price = row.cells[1].innerHTML; // 가격
            var ticker_rate = row.cells[2].innerHTML; // 상승률

            if (i<11) { // 상위 10개만
                // 만약 안보임 처리 되어 있다면, 보여주기
                if (row.style.display=='none') {
                    row.style.display='';
                } else {
                    row.style.display='';
                };
            } else { // 상위 11개 이후의 값들
                // 만약 보임되어 있다면, 안보여주기
                if (row.style.display=='') {
                    row.style.display='none';
                } else {
                    row.style.display='none';
                };
            };
            

            // console.log(ticker_name, ticker_spot_price, ticker_future_price, ticker_premium)
        };
    }) ();
    // future top 10 display only 10 tickers and upload img
    (function() {
        var table_set = $('#future_top_10_table')[0]
        var rowList = table_set.rows;
        // console.log(rowList)
        for (i=1; i<rowList.length; i++) {
            var row = rowList[i];     //thead 부분을 제외하기 위해 i가 1부터 시작됩니다.
            // var tdsNum = row.childElementCount;     //아래 for문에서 사용하기 위해 row 하위에 존재하는 td의 갯수를 구합니다.
            var ticker_name = row.cells[0].innerHTML; // 코인
            var ticker_price = row.cells[1].innerHTML; // 가격
            var ticker_rate = row.cells[2].innerHTML; // 상승률
            
            // 이미지가 없을경우 업비트와 비교하여 업비트에도 있는 코인일 경우 이미지 업로드 해주기
            let no_img_path;
            for (temp_i in upbit_tickers) {
                no_img_path = '../../../static/imgFolder/no.png' // 에러이미지 path
                // 이름이 같을 같고 이미지가 없는 경우
                if (upbit_tickers[temp_i].replace("KRW-","") == ticker_name.split(">")[1] && ticker_name.split(">")[0]=='<img src="'+no_img_path+'" width="20" height="20"') { 
                    let temp_coin_name = ticker_name.split(">")[1]
                    row.cells[0].innerHTML = '<img src="https://static.upbit.com/logos/'+temp_coin_name+'.png" width="20" height="20"/>'+temp_coin_name
                    break
                };
            };

            if (i<11) { // 상위 10개만
                // 만약 안보임 처리 되어 있다면, 보여주기
                if (row.style.display=='none') {
                    row.style.display='';
                } else {
                    row.style.display='';
                };
            } else { // 상위 11개 이후의 값들
                // 만약 보임되어 있다면, 안보여주기
                if (row.style.display=='') {
                    row.style.display='none';
                } else {
                    row.style.display='none';
                };
            };
            

            // console.log(ticker_name, ticker_spot_price, ticker_future_price, ticker_premium)
        };
    }) ();
    
}, 100);


// Summary 부분 차트 그려주기
// 처음 갱신 부분
setTimeout(
    function () {
        // console.log("start")
        // 값 가지고 오기
        let fearandgreedValue = [100-parseFloat($('#FearAndGreedData').text()).toFixed(2), parseFloat($('#FearAndGreedData').text())];
        let btc_dom_val = parseFloat($('#DominaceIndecOfBtc').text());
        let eth_dom_val = parseFloat($('#DominaceIndecOfEth').text());
        let bnb_dom_val = parseFloat($('#DominaceIndecOfBnb').text());
        let ustc_dom_val = parseFloat($('#DominaceIndecOfUSDT').text());
        let usdc_dom_val = parseFloat($('#DominaceIndecOfUSDC').text());
        let rest_dom_val = (100 - (btc_dom_val+eth_dom_val+bnb_dom_val+ustc_dom_val+usdc_dom_val)).toFixed(2);
        let dominantValue = [btc_dom_val, eth_dom_val, bnb_dom_val, ustc_dom_val, usdc_dom_val, rest_dom_val];
        let rsiVal = [100 - parseFloat($('#RsiIndexOf30Minutes').text()), parseFloat($('#RsiIndexOf30Minutes').text())];

        // 넣어줄 차트 부분
        let fearandgreedValue_chart = $('#FearAndGreedChart');
        let dominantValue_chart = $('#DominantChart');
        let rsiValue_chart = $('#RsiIndexChart');
        // 공포 지수 차트 그리기
        let fear_and_greed_chart = new Chart(fearandgreedValue_chart, {
            type: 'doughnut',
            data: {
                labels: ["Fear", "Greed"],
                datasets: [{
                    data: fearandgreedValue,      // [데이터 배열]
                    backgroundColor: [
                        '#CD1039', // 공포
                        '#52E252' // 탐욕
                    ],
                    borderWidth: 0,
                    scaleBeginAtZero: true,
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                cutoutPercentage: 50,
                // animation: false,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
            }
        }); 
        // 도미넌스 차트 그리기
        let dominant_chart = new Chart(dominantValue_chart, {
            type: 'doughnut',
            data: {
                labels: ["Btc",'Eth','Bnb','USDT','USDC','Rest All Coin'],
                datasets: [{
                    data: dominantValue,      // [데이터 배열]
                    backgroundColor: [
                        '#FF8200', // 비트코인
                        '#000000', // 이더리움
                        '#FAEB78', // 비앤비
                        '#3CA03C', //USDT
                        '#64A0FF', // USTC
                        '#FFFFFF'// 나머지
                    ],
                    borderWidth: 0,
                    scaleBeginAtZero: true,
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                cutoutPercentage: 0,
                // animation: false,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
            }
        });
        // rsi 차트 그리기
        let rsi_chart = new Chart(rsiValue_chart, {
            type: 'doughnut',
            data: {
                labels: ["Ask","Bid"],
                datasets: [{
                    data: rsiVal,      // [데이터 배열]
                    backgroundColor: [
                        '#CD1039', // 매도
                        '#52E252' // 매수
                    ],
                    borderWidth: 0,
                    scaleBeginAtZero: true,
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                cutoutPercentage: 50,
                // animation: false,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
            }
        });
}, 5000);
setInterval(
    function () {
        // console.log("start")
        // 값 가지고 오기
        let fearandgreedValue = [100 - parseFloat($('#FearAndGreedData').text()).toFixed(2), parseFloat($('#FearAndGreedData').text())];
        let btc_dom_val = parseFloat($('#DominaceIndecOfBtc').text());
        let eth_dom_val = parseFloat($('#DominaceIndecOfEth').text());
        let bnb_dom_val = parseFloat($('#DominaceIndecOfBnb').text());
        let ustc_dom_val = parseFloat($('#DominaceIndecOfUSDT').text());
        let usdc_dom_val = parseFloat($('#DominaceIndecOfUSDC').text());
        let rest_dom_val = (100 - (btc_dom_val + eth_dom_val + bnb_dom_val + ustc_dom_val + usdc_dom_val)).toFixed(2);
        let dominantValue = [btc_dom_val, eth_dom_val, bnb_dom_val, ustc_dom_val, usdc_dom_val, rest_dom_val];

        // 넣어줄 차트 부분
        let fearandgreedValue_chart = $('#FearAndGreedChart');
        let dominantValue_chart = $('#DominantChart');
        // 공포 지수 차트 그리기
        let fear_and_greed_chart = new Chart(fearandgreedValue_chart, {
            type: 'doughnut',
            data: {
                labels: ["Fear", "Greed"],
                datasets: [{
                    data: fearandgreedValue,      // [데이터 배열]
                    backgroundColor: [
                        '#CD1039', // 공포
                        '#52E252' // 탐욕
                    ],
                    borderWidth: 0,
                    scaleBeginAtZero: true,
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                cutoutPercentage: 50,
                // animation: false,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
            }
        });
        // 도미넌스 차트 그리기
        let dominant_chart = new Chart(dominantValue_chart, {
            type: 'doughnut',
            data: {
                labels: ["Btc", 'Eth', 'Bnb', 'USDT', 'USDC', 'Rest All Coin'],
                datasets: [{
                    data: dominantValue,      // [데이터 배열]
                    backgroundColor: [
                        '#FF8200', // 비트코인
                        '#000000', // 이더리움
                        '#FAEB78', // 비앤비
                        '#3CA03C', //USDT
                        '#64A0FF', // USTC
                        '#FFFFFF'// 나머지
                    ],
                    borderWidth: 0,
                    scaleBeginAtZero: true,
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                cutoutPercentage: 0,
                // animation: false,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
            }
        });
        // rsi 차트 그리기
        let rsi_chart = new Chart(rsiValue_chart, {
            type: 'doughnut',
            data: {
                labels: ["Ask","Bid"],
                datasets: [{
                    data: rsiVal,      // [데이터 배열]
                    backgroundColor: [
                        '#CD1039', // 매도
                        '#52E252' // 매수
                    ],
                    borderWidth: 0,
                    scaleBeginAtZero: true,
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                cutoutPercentage: 50,
                // animation: false,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
            }
        });
        
}, 1000*60*5); // 5분 마다 차트 갱신

// 김치 프리미엄의 search 부분
//input에 keyup 이벤트 등록
$("#premium_search").keyup(function () {
    // console.log('키보드 이벤트 발생')
    //keyup 이벤트 발생 시 해당 input의 value 가져오기.
    var searchText = $(this).val();
    //실시간 검색이 필요한 table의 모든 행(tr) 숨김 처리
    $("#coin_premium_lists_table > tbody > tr").hide();
	//해당 table에서 input에 입력한 데이터가 있는 td Element 찾기.
	var temp = $("#coin_premium_lists_table > tbody > tr > td:contains('" + searchText + "')");
	//입력한 데이터가 있는 Elemnet의 부모 Elemnet(td)만 표시.
	$(temp).parent().show();
})
