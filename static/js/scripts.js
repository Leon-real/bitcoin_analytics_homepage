/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    // Dashboard Summary Charts
    const dashbordObject1 = document.body.querySelector('#dashbordObject_1');
    const dashbordObject2 = document.body.querySelector('#dashbordObject_2');
    const dashbordObject3 = document.body.querySelector('#dashbordObject_3');
    const dashbordObject4 = document.body.querySelector('#dashbordObject_4');
    if (dashbordObject1) {
        dashbordObject1.addEventListener('click', event => {
            console.log('공포 / 탐욕 지수 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '공포 / 탐욕 지수 차트'
        });
    }
    if (dashbordObject2) {
        dashbordObject2.addEventListener('click', event => {
            console.log('강도 지수 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '상대 강도 지수 차트'
        });
    }
    if (dashbordObject3) {
        dashbordObject3.addEventListener('click', event => {
            console.log('시장 트렌드 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '시장 트렌드 차트'
        });
    }
    if (dashbordObject4) {
        dashbordObject4.addEventListener('click', event => {
            console.log('비트코인 도미넌스 차트 표시');
            document.getElementById('index_dashboradchart1').innerHTML = '비트코인 도미넌스 차트'
        });
    }

});


// API

// Fear & Greed API
console.log("api test start")

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

console.log("api test end")