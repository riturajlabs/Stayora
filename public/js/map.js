// map.js

if (document.getElementById('map') && window.coordinates) {
    const lon = window.coordinates[0]; 
    const lat = window.coordinates[1]; 
    const mapLocation = window.mapLocation || "Listing Location";

    // CREATE MAP
    const map = L.map('map').setView([lat, lon], 13);

    // TILE LAYER
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; StayOra Map'
    }).addTo(map);

    // CUSTOM RED MARKER
    const redIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    // MARKER
    const marker = L.marker([lat, lon], { icon: redIcon })
            .addTo(map)
            .bindPopup("Excat location provided after booking");


    // SEARCH CONTROL
    const searchControl = L.Control.geocoder({
        defaultMarkGeocode: false
    }).on('markgeocode', function(e) {
        const bbox = e.geocode.bbox;
        const center = e.geocode.center;
        map.fitBounds(bbox);
        L.marker([center.lat, center.lng]).addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
    }).addTo(map);
}