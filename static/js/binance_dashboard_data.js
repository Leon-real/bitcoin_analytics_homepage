


// 바이낸스 소켓 통신 함수 부분
function binance_web_socket(){ 
    // 바이낸스 소켓 연결
    function binance_connect(){
        // let binance_socket = new WebSocket('wss://stream.binance.com:443/ws/!miniTicker@arr'); // 현물
        let binance_socket = new WebSocket('wss://fstream.binance.com:443/ws/!miniTicker@arr'); // 선물

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
            // console.log(value['s'], value['c'])
            if (value['s'].includes('USDT')) { //USDT라는 글자가 있을 경우
                // console.log(value['s'], value['c']);
            };
        };
    };

    // 연결 실행
    binance_connect();
};

binance_web_socket();