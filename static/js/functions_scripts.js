
///////////////////////////////////////////////////////////////////////////////////
// setinetval 함수 한번 실행시키고 그다음부터 시간당 반복되도록 설정
function startInterval(callback, time) {
    callback();
    return setInterval(callback, time);
};
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
// 퀀트 계산 부분
// EMA구하기
function EMACalc(mArray, mRange) {
    var k = 2 / (mRange + 1);
    // first item is just the same as the first item in the input
    let emaArray = [mArray[0]];
    // for the rest of the items, they are computed with the previous one
    for (var i = 1; i < mArray.length; i++) {
        emaArray.push(mArray[i] * k + emaArray[i - 1] * (1 - k));
    }
    return emaArray;
}

// rsi 계산해주기 인자값으로 종가 배열을 받는다.
function calculateRSI(closingPrices) {
    // Calculate the average of the upward price changes
    let avgUpwardChange = 0;
    for (let i = 1; i < closingPrices.length; i++) {
        avgUpwardChange += Math.max(0, closingPrices[i] - closingPrices[i - 1]);
    }
    avgUpwardChange /= closingPrices.length;

    // Calculate the average of the downward price changes
    let avgDownwardChange = 0;
    for (let i = 1; i < closingPrices.length; i++) {
        avgDownwardChange += Math.max(0, closingPrices[i - 1] - closingPrices[i]);
    }
    avgDownwardChange /= closingPrices.length;

    // Calculate the RSI
    const rsi = 100 - (100 / (1 + (avgUpwardChange / avgDownwardChange)));

    return rsi;
}
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
// 색상 바꿔주기 (255,255,0) => rgbToHex(255,255,0); // ffff0
function valueToHex(c) {
    var hex = c.toString(16);
    return hex
}
// rgb를 Hex로 변환하기
function rgbToHex(r, g, b) {
    return (valueToHex(r) + valueToHex(g) + valueToHex(b));
}
///////////////////////////////////////////////////////////////////////////////////