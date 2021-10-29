
function exito(pos){
    coords = {lat:pos.coords.latitude, lng:pos.coords.longitude},
    marker = new H.map.Marker(coords, {icon: icon});
    map.setCenter(coords)
    map.addObject(marker)
    
  
}
function fallo(pos){
    switch (pos.code){
        case 1:
            alerta = 'Error, Permiso denegado'
            break;
        case 2:
            alerta = 'Error, Posicion no disponible'
            break;
        case 3:
            alerta = 'Error, Timeout'
    }
    alert(alerta)
}  
    var platform = new H.service.Platform({
        'apikey': '{Efln7QgxauCvUSk_paJz2r0uO5oYUdshk-VDeUwqmtM}'
      });
      // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,{
                zoom: 15
        });
    svgmarker = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">\\/</text></svg>';
    var icon = new H.map.Icon(svgmarker)
if (!navigator.geolocation){
    alert("Geolocalizacion no disponible");
}else{
    navigator.geolocation.watchPosition(exito,fallo)
}