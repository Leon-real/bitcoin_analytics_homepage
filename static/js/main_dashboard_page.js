

// 김치 프리미엄 테이블 정렬하기
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
    // $('th').each(function (column){
    //     // 정렬 부분 고정
    //     if ($(this).is('.asc')) {
    //         sortdir = 1;
    //         var rec = $('table').find('tbody>tr').get();
    //         rec.sort(function (a, b) {
    //             var val1 = $(a).children('td').eq(column).text().toUpperCase().replace(" %","");
    //             var val2 = $(b).children('td').eq(column).text().toUpperCase().replace(" %","");
    //             if (isNaN(val1) || isNaN(val2)){
    //                 return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
    //             }
    //             else {
    //                 return (parseFloat(val1) < parseFloat(val2)) ? -sortdir : (parseFloat(val1) > parseFloat(val2)) ? sortdir : 0;
    //             }
    //         });
    //         $.each(rec, function (index, row) {
    //             $('tbody').append(row);
    //         });
    //     } else if (($(this).is('.desc'))) {
    //         sortdir = -1;
            
    //         var rec = $('table').find('tbody>tr').get();
    //         rec.sort(function (a, b) {
    //             var val1 = $(a).children('td').eq(column).text().toUpperCase().replace(" %","");
    //             var val2 = $(b).children('td').eq(column).text().toUpperCase().replace(" %","");
    //             if (isNaN(val1) || isNaN(val2)){
    //                 return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
    //             }
    //             else {
    //                 return (parseFloat(val1) < parseFloat(val2)) ? -sortdir : (parseFloat(val1) > parseFloat(val2)) ? sortdir : 0;
    //             }
    //         });
    //         $.each(rec, function (index, row) {
    //             $('tbody').append(row);
    //         });
    //     }
    // });
    
    // 값이 0인 경우 숨김 처리
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
}, 100);

