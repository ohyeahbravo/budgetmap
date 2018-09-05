/*
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoib2h5ZWFoYnJhdm8iLCJhIjoiY2psbXNqZmc0MTdhcDNycGIyenp6YTM5dSJ9.Zo0fukXCo-JW__NFIBQ7rw';
var map = new mapboxgl.Map({
    container: 'mapid', // container id
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


/*
var mymap = L.map('mapid').setView([50.975389392920405, 11.33064866065979], 13);

L.control.zoom(

)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib2h5ZWFoYnJhdm8iLCJhIjoiY2psbXNqZmc0MTdhcDNycGIyenp6YTM5dSJ9.Zo0fukXCo-JW__NFIBQ7rw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'    // LATER: 'mapbox.light' also looks good
}).addTo(mymap);

L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup("<b>Hello world!</b><br />I am a popup.");

L.marker([50.975389392920405, 11.33064866065979]).addTo(mymap)
    .bindPopup("<b>Bauhaus University</b><br />Mensa Am Park");

L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap).bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

/*
let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
*/

