window.onload = function(){
    const map = L.map('map');

map.locate({ setView: true, maxZoom: 16});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onLocationFound(e) {
        var radius = e.accuracy / 2;
        
        L.marker(e.latlng, {
            icon: orangeIcon
        }).addTo(map).bindPopup("Você está aqui").openPopup();
}
map.on('locationfound', onLocationFound);

    var orangeIcon = L.icon({
        iconUrl: './assets/image/iconpin.png',
        iconSize: [25,25],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

