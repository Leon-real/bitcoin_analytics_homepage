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

    // ajax 통신
    // $(function() {
	// 	timer = setInterval( function () {
	// 		//----------------------------------------------------------------------------------
	// 		console.log('ajax 0.5 통신중')
    //         let ohlcv_data;
    //         $.ajax({
    //             url:'/myapp/api/v1',
    //             type: "GET",
    //             dataType: "json",
    //             data: {'send_data': 'Send this message'},
    //             success: function(data){
    //                 ohlcv_data = data;
    //                 var last_time = data[data.length -1].index.substr(0,16).replace('T', "일 ")
    //                 var current_price = data[data.length -1].close
    //                 // console.log(data[data.length -1]); // 마지막 인덱스 가져오기
    //                 // console.log(last_time)
    //                 // console.log(current_price)
                    
    //                 $(".last-time").text(last_time)
    //                 $(".current-price").text(current_price)

    //             // },beforeSend:function(){
    //             //     console.log("i am waiting");
    //             // },complete:function(){
    //             //     console.log("i am done");
    //             },error: function (request, status, error) {
    //                 console.log('i am failed');
    //             }
    //         });

    //         return ohlcv_data
	// 		//----------------------------------------------------------------------------------
	// 	}, 1000); // 1초에 한번씩 받아온다.
	// });

    // 업비트에서 직접 데이터 받기 #초당 5회
    
});



