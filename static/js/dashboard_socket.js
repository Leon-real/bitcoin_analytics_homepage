let binance_socket_datas; // 바이낸스 소켓통신 선물 데이터들
let binance_socket_spot_datas; // 바이낸스 소켓통신 현물 데이터들
let upbit_socket_datas; // 업비트 소켓통신 데이터들

// 바이낸스 소켓 통신 부분
function binance_connect(){
    let binance_spot_socket = new WebSocket('wss://stream.binance.com:443/ws/!miniTicker@arr'); // 현물
    let binance_socket = new WebSocket('wss://fstream.binance.com:443/ws/!ticker@arr'); // 선물
    binance_socket.onmessage = (e) =>{
        let d = JSON.parse(e.data);
        binance_socket_datas = d;
    };
    binance_spot_socket.onmessage = (e) =>{
        let d = JSON.parse(e.data);
        binance_socket_spot_datas = d;
    };
};
// 바이낸스 소켓 통신 연결 실행
binance_connect();

// 업비트 소켓 통신 부분
let upbit_socket; // 업비트 소켓 객체 생성
function upbit_connectWS() {
    if(upbit_socket != undefined){
        upbit_socket.close();
    }
    upbit_socket = new WebSocket("wss://api.upbit.com/websocket/v1");
    upbit_socket.binaryType = 'arraybuffer';
    upbit_socket.onopen 	= function(e){
        filterRequest(upbit_ticker_codes
        )// api 통신이 안되어서 업비트 api통신 불가능일 때,
        // '[{"ticket":"UNIQUE_TICKET"},{"type":"ticker","codes":["KRW-BTC"]},{"type":"trade","codes":["KRW-BTC"]},{"type":"ticker","codes":["KRW-ETH"]},{"type":"trade","codes":["KRW-ETH"]},{"type":"ticker","codes":["KRW-NEO"]},{"type":"trade","codes":["KRW-NEO"]},{"type":"ticker","codes":["KRW-MTL"]},{"type":"trade","codes":["KRW-MTL"]},{"type":"ticker","codes":["KRW-XRP"]},{"type":"trade","codes":["KRW-XRP"]},{"type":"ticker","codes":["KRW-ETC"]},{"type":"trade","codes":["KRW-ETC"]},{"type":"ticker","codes":["KRW-OMG"]},{"type":"trade","codes":["KRW-OMG"]},{"type":"ticker","codes":["KRW-SNT"]},{"type":"trade","codes":["KRW-SNT"]},{"type":"ticker","codes":["KRW-WAVES"]},{"type":"trade","codes":["KRW-WAVES"]},{"type":"ticker","codes":["KRW-XEM"]},{"type":"trade","codes":["KRW-XEM"]},{"type":"ticker","codes":["KRW-QTUM"]},{"type":"trade","codes":["KRW-QTUM"]},{"type":"ticker","codes":["KRW-LSK"]},{"type":"trade","codes":["KRW-LSK"]},{"type":"ticker","codes":["KRW-STEEM"]},{"type":"trade","codes":["KRW-STEEM"]},{"type":"ticker","codes":["KRW-XLM"]},{"type":"trade","codes":["KRW-XLM"]},{"type":"ticker","codes":["KRW-ARDR"]},{"type":"trade","codes":["KRW-ARDR"]},{"type":"ticker","codes":["KRW-ARK"]},{"type":"trade","codes":["KRW-ARK"]},{"type":"ticker","codes":["KRW-STORJ"]},{"type":"trade","codes":["KRW-STORJ"]},{"type":"ticker","codes":["KRW-GRS"]},{"type":"trade","codes":["KRW-GRS"]},{"type":"ticker","codes":["KRW-REP"]},{"type":"trade","codes":["KRW-REP"]},{"type":"ticker","codes":["KRW-ADA"]},{"type":"trade","codes":["KRW-ADA"]},{"type":"ticker","codes":["KRW-SBD"]},{"type":"trade","codes":["KRW-SBD"]},{"type":"ticker","codes":["KRW-POWR"]},{"type":"trade","codes":["KRW-POWR"]},{"type":"ticker","codes":["KRW-BTG"]},{"type":"trade","codes":["KRW-BTG"]},{"type":"ticker","codes":["KRW-ICX"]},{"type":"trade","codes":["KRW-ICX"]},{"type":"ticker","codes":["KRW-EOS"]},{"type":"trade","codes":["KRW-EOS"]},{"type":"ticker","codes":["KRW-TRX"]},{"type":"trade","codes":["KRW-TRX"]},{"type":"ticker","codes":["KRW-SC"]},{"type":"trade","codes":["KRW-SC"]},{"type":"ticker","codes":["KRW-ONT"]},{"type":"trade","codes":["KRW-ONT"]},{"type":"ticker","codes":["KRW-ZIL"]},{"type":"trade","codes":["KRW-ZIL"]},{"type":"ticker","codes":["KRW-POLYX"]},{"type":"trade","codes":["KRW-POLYX"]},{"type":"ticker","codes":["KRW-ZRX"]},{"type":"trade","codes":["KRW-ZRX"]},{"type":"ticker","codes":["KRW-LOOM"]},{"type":"trade","codes":["KRW-LOOM"]},{"type":"ticker","codes":["KRW-BCH"]},{"type":"trade","codes":["KRW-BCH"]},{"type":"ticker","codes":["KRW-BAT"]},{"type":"trade","codes":["KRW-BAT"]},{"type":"ticker","codes":["KRW-IOST"]},{"type":"trade","codes":["KRW-IOST"]},{"type":"ticker","codes":["KRW-RFR"]},{"type":"trade","codes":["KRW-RFR"]},{"type":"ticker","codes":["KRW-CVC"]},{"type":"trade","codes":["KRW-CVC"]},{"type":"ticker","codes":["KRW-IQ"]},{"type":"trade","codes":["KRW-IQ"]},{"type":"ticker","codes":["KRW-IOTA"]},{"type":"trade","codes":["KRW-IOTA"]},{"type":"ticker","codes":["KRW-HIFI"]},{"type":"trade","codes":["KRW-HIFI"]},{"type":"ticker","codes":["KRW-ONG"]},{"type":"trade","codes":["KRW-ONG"]},{"type":"ticker","codes":["KRW-GAS"]},{"type":"trade","codes":["KRW-GAS"]},{"type":"ticker","codes":["KRW-UPP"]},{"type":"trade","codes":["KRW-UPP"]},{"type":"ticker","codes":["KRW-ELF"]},{"type":"trade","codes":["KRW-ELF"]},{"type":"ticker","codes":["KRW-KNC"]},{"type":"trade","codes":["KRW-KNC"]},{"type":"ticker","codes":["KRW-BSV"]},{"type":"trade","codes":["KRW-BSV"]},{"type":"ticker","codes":["KRW-THETA"]},{"type":"trade","codes":["KRW-THETA"]},{"type":"ticker","codes":["KRW-QKC"]},{"type":"trade","codes":["KRW-QKC"]},{"type":"ticker","codes":["KRW-BTT"]},{"type":"trade","codes":["KRW-BTT"]},{"type":"ticker","codes":["KRW-MOC"]},{"type":"trade","codes":["KRW-MOC"]},{"type":"ticker","codes":["KRW-ENJ"]},{"type":"trade","codes":["KRW-ENJ"]},{"type":"ticker","codes":["KRW-TFUEL"]},{"type":"trade","codes":["KRW-TFUEL"]},{"type":"ticker","codes":["KRW-MANA"]},{"type":"trade","codes":["KRW-MANA"]},{"type":"ticker","codes":["KRW-ANKR"]},{"type":"trade","codes":["KRW-ANKR"]},{"type":"ticker","codes":["KRW-AERGO"]},{"type":"trade","codes":["KRW-AERGO"]},{"type":"ticker","codes":["KRW-ATOM"]},{"type":"trade","codes":["KRW-ATOM"]},{"type":"ticker","codes":["KRW-TT"]},{"type":"trade","codes":["KRW-TT"]},{"type":"ticker","codes":["KRW-CRE"]},{"type":"trade","codes":["KRW-CRE"]},{"type":"ticker","codes":["KRW-MBL"]},{"type":"trade","codes":["KRW-MBL"]},{"type":"ticker","codes":["KRW-WAXP"]},{"type":"trade","codes":["KRW-WAXP"]},{"type":"ticker","codes":["KRW-HBAR"]},{"type":"trade","codes":["KRW-HBAR"]},{"type":"ticker","codes":["KRW-MED"]},{"type":"trade","codes":["KRW-MED"]},{"type":"ticker","codes":["KRW-MLK"]},{"type":"trade","codes":["KRW-MLK"]},{"type":"ticker","codes":["KRW-STPT"]},{"type":"trade","codes":["KRW-STPT"]},{"type":"ticker","codes":["KRW-ORBS"]},{"type":"trade","codes":["KRW-ORBS"]},{"type":"ticker","codes":["KRW-VET"]},{"type":"trade","codes":["KRW-VET"]},{"type":"ticker","codes":["KRW-CHZ"]},{"type":"trade","codes":["KRW-CHZ"]},{"type":"ticker","codes":["KRW-STMX"]},{"type":"trade","codes":["KRW-STMX"]},{"type":"ticker","codes":["KRW-DKA"]},{"type":"trade","codes":["KRW-DKA"]},{"type":"ticker","codes":["KRW-HIVE"]},{"type":"trade","codes":["KRW-HIVE"]},{"type":"ticker","codes":["KRW-KAVA"]},{"type":"trade","codes":["KRW-KAVA"]},{"type":"ticker","codes":["KRW-AHT"]},{"type":"trade","codes":["KRW-AHT"]},{"type":"ticker","codes":["KRW-LINK"]},{"type":"trade","codes":["KRW-LINK"]},{"type":"ticker","codes":["KRW-XTZ"]},{"type":"trade","codes":["KRW-XTZ"]},{"type":"ticker","codes":["KRW-BORA"]},{"type":"trade","codes":["KRW-BORA"]},{"type":"ticker","codes":["KRW-JST"]},{"type":"trade","codes":["KRW-JST"]},{"type":"ticker","codes":["KRW-CRO"]},{"type":"trade","codes":["KRW-CRO"]},{"type":"ticker","codes":["KRW-TON"]},{"type":"trade","codes":["KRW-TON"]},{"type":"ticker","codes":["KRW-SXP"]},{"type":"trade","codes":["KRW-SXP"]},{"type":"ticker","codes":["KRW-HUNT"]},{"type":"trade","codes":["KRW-HUNT"]},{"type":"ticker","codes":["KRW-PLA"]},{"type":"trade","codes":["KRW-PLA"]},{"type":"ticker","codes":["KRW-DOT"]},{"type":"trade","codes":["KRW-DOT"]},{"type":"ticker","codes":["KRW-SRM"]},{"type":"trade","codes":["KRW-SRM"]},{"type":"ticker","codes":["KRW-MVL"]},{"type":"trade","codes":["KRW-MVL"]},{"type":"ticker","codes":["KRW-STRAX"]},{"type":"trade","codes":["KRW-STRAX"]},{"type":"ticker","codes":["KRW-AQT"]},{"type":"trade","codes":["KRW-AQT"]},{"type":"ticker","codes":["KRW-GLM"]},{"type":"trade","codes":["KRW-GLM"]},{"type":"ticker","codes":["KRW-SSX"]},{"type":"trade","codes":["KRW-SSX"]},{"type":"ticker","codes":["KRW-META"]},{"type":"trade","codes":["KRW-META"]},{"type":"ticker","codes":["KRW-FCT2"]},{"type":"trade","codes":["KRW-FCT2"]},{"type":"ticker","codes":["KRW-CBK"]},{"type":"trade","codes":["KRW-CBK"]},{"type":"ticker","codes":["KRW-SAND"]},{"type":"trade","codes":["KRW-SAND"]},{"type":"ticker","codes":["KRW-HUM"]},{"type":"trade","codes":["KRW-HUM"]},{"type":"ticker","codes":["KRW-DOGE"]},{"type":"trade","codes":["KRW-DOGE"]},{"type":"ticker","codes":["KRW-STRK"]},{"type":"trade","codes":["KRW-STRK"]},{"type":"ticker","codes":["KRW-PUNDIX"]},{"type":"trade","codes":["KRW-PUNDIX"]},{"type":"ticker","codes":["KRW-FLOW"]},{"type":"trade","codes":["KRW-FLOW"]},{"type":"ticker","codes":["KRW-DAWN"]},{"type":"trade","codes":["KRW-DAWN"]},{"type":"ticker","codes":["KRW-AXS"]},{"type":"trade","codes":["KRW-AXS"]},{"type":"ticker","codes":["KRW-STX"]},{"type":"trade","codes":["KRW-STX"]},{"type":"ticker","codes":["KRW-XEC"]},{"type":"trade","codes":["KRW-XEC"]},{"type":"ticker","codes":["KRW-SOL"]},{"type":"trade","codes":["KRW-SOL"]},{"type":"ticker","codes":["KRW-MATIC"]},{"type":"trade","codes":["KRW-MATIC"]},{"type":"ticker","codes":["KRW-NU"]},{"type":"trade","codes":["KRW-NU"]},{"type":"ticker","codes":["KRW-AAVE"]},{"type":"trade","codes":["KRW-AAVE"]},{"type":"ticker","codes":["KRW-1INCH"]},{"type":"trade","codes":["KRW-1INCH"]},{"type":"ticker","codes":["KRW-ALGO"]},{"type":"trade","codes":["KRW-ALGO"]},{"type":"ticker","codes":["KRW-NEAR"]},{"type":"trade","codes":["KRW-NEAR"]},{"type":"ticker","codes":["KRW-AVAX"]},{"type":"trade","codes":["KRW-AVAX"]},{"type":"ticker","codes":["KRW-T"]},{"type":"trade","codes":["KRW-T"]},{"type":"ticker","codes":["KRW-CELO"]},{"type":"trade","codes":["KRW-CELO"]},{"type":"ticker","codes":["KRW-GMT"]},{"type":"trade","codes":["KRW-GMT"]},{"type":"ticker","codes":["KRW-APT"]},{"type":"trade","codes":["KRW-APT"]},{"type":"ticker","codes":["KRW-SHIB"]},{"type":"trade","codes":["KRW-SHIB"]}]'
    }
    upbit_socket.onclose 	= function(e){ 
        upbit_socket = undefined; 
    }
    upbit_socket.onmessage= function(e){ 
        let enc = new TextDecoder("utf-8");
        let arr = new Uint8Array(e.data);
        let str_d = enc.decode(arr);
        let d = JSON.parse(str_d);
        upbit_socket_datas = d;
    }	
}
// 업비트 조회하는 티커의 조건 요청 웹소켓 요청
function filterRequest(filter) {
    if(upbit_socket == undefined){
        alert('no connect exists');
        return;
    }
    upbit_socket.send(filter);
}
// 업비트 소켓 통신 연결 실행
upbit_connectWS();