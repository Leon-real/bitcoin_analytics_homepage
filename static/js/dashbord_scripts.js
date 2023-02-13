window.addEventListener('DOMContentLoaded', event => {

    // API

    // Fear & Greed API
    // console.log("api test start")

    const config = {
        method: "get"
        };
        fetch("https://api.alternative.me/fng/?limit=1", config)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const value = data.data[0]['value'] // api value 값 가져오기
            console.log(value)
            document.getElementById('FearAndGreedData').innerHTML = value
            document.getElementById('FearAndGreedDataProgressbar').value = value
        })
        .catch(error => console.log(error));

    // console.log("api test end")

});