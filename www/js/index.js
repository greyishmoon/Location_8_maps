var watchID;
var map;
var loc;
var path = [];


       

$(document).on( "pageinit", function() {
    
    
    watchID = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
    // MAP - Create location LatLng's
    lochome = new google.maps.LatLng(52.215322, -2.347495);
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: lochome,
        zoom: 12
    });
    
});


function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
     var mapPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
    
    mapPath.setMap(map);
}

function onLocationFail(error) {
    console.log("Error: " + error.message);
}