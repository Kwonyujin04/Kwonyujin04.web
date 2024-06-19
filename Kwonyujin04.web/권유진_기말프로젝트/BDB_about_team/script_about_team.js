// 지도 초기화
var map = L.map('map').setView([37.5455, 126.9643], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.5455, 126.9643]).addTo(map)
    .bindPopup('<b>숙명여자대학교</b><br>서울특별시 용산구 청파로47길 100')
    .openPopup();
