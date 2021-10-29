
function exito(pos){
    document.write("Latitud: ",pos.coords.latitude," Longitud: ",pos.coords.longitude)
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
//if (!navigator.geolocation){alert("Geolocalizacion no disponible");}else{
//navigator.geolocation.getCurrentPosition(exito,fallo)}

if (!navigator.geolocation){alert("Geolocalizacion no disponible");}else{
    navigator.geolocation.watchPosition(exito,fallo)}
    