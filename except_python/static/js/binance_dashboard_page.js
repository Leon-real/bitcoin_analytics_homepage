
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
// 정렬 값 고정하여서 자동 갱신, 업비트에도 있는 코인을 경우 이미지 불러와주기
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
    // 테이블에서 특정 조건의 행 숨겨주기 및 이미지넣어주기
    (function() {
        var table_set = $('#coin_lists_table')[0]
        var rowList = table_set.rows;
        // console.log(rowList)
        for (i=1; i<rowList.length; i++) {
            var row = rowList[i];     //thead 부분을 제외하기 위해 i가 1부터 시작됩니다.
            // var tdsNum = row.childElementCount;     //아래 for문에서 사용하기 위해 row 하위에 존재하는 td의 갯수를 구합니다.

            var ticker_name = row.cells[0].innerHTML; // 코인
            var ticker_spot_price = row.cells[1].innerHTML; // 가격
            var ticker_future_price = row.cells[2].innerHTML; // 등락 퍼센트
            var ticker_premium = row.cells[3].innerHTML; // 등락 가격

            // 업비트와 비교하여 업비트에도 있는 코인일 경우 이미지 업로드 해주기
            // console.log(ticker_name.split(">")[0], ticker_name.split(">")[1])
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

            // 만약 등락 퍼센트가 0일 경우 안보이게 하기
            if (ticker_future_price==0) {
                row.style.display='none';
            } else {  // 전부 있을 경우 다시 보여주기
                row.style.display='';
            }

            // console.log(ticker_name, ticker_spot_price, ticker_future_price, ticker_premium)
        };
    }) ();
}, 100);

// 검색 부분
//input에 keyup 이벤트 등록
$("#search_coin_input").keyup(function () {
    console.log('키보드 이벤트 발생')
    //keyup 이벤트 발생 시 해당 input의 value 가져오기.
    var searchText = $(this).val().toUpperCase();
	//해당 table에서 input에 입력한 데이터가 있는 td Element 찾기.
	var temp = $("#coin_lists_table > tbody > tr > td:contains('" + searchText + "')");
    var show_temp = $('search_coin_table > tbody > tr > td');
	//입력한 데이터가 있는 Elemnet의 부모 Elemnet(td)만 표시.
    
	console.log(temp)
    
})