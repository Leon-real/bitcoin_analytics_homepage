
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



