
var Stamen_TonerBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> - Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
});
var map = new L.Map('map', {
  center: new L.LatLng(49.169392, 70.449074),
  zoom: 5,
  layers: [Stamen_TonerBackground],
  minZoom: 4,
  maxZoom: 11,
  zoomControl: false,
  scrollWheelZoom: false
});

// load GeoJSON from an external file
$.getJSON("geojson/kazakhstan.json",function(data){
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data).addTo(map);
});
$.getJSON("geojson/places.json",function(data){
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data).addTo(map);
});
