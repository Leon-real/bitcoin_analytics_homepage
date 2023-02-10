


// let binance_socket = new WebSocket('wss://stream.binance.com:443/ws/!miniTicker@arr'); // 현물
let binance_socket = new WebSocket('wss://fstream.binance.com:443/ws/!miniTicker@arr'); // 선물

binance_socket.onmessage = (e) =>{
    let d = JSON.parse(e.data);
    // console.log(d)
    coinListSetup(d);
};
function coinListSetup(tickerJsonData){
    // console.log(tickerJsonData);
    for (const [key, value] of Object.entries(tickerJsonData)){
        // console.log(value['s'], value['c'])
        if (value['s'].includes('USDT')) { //USDT라는 글자가 있을 경우
            // console.log(value['s'], value['c']);
        };
    };
    
    
};
