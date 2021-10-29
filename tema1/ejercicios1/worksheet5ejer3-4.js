herm = prompt('nº de hermanos, porfavor')
cant = prompt('Cantidad porfavor')
if (herm > 3){
    cant = cant * 0.85
}else{
    cant = cant * 0.95
}
alert(`La cantidad con descuento es: ${cant}`)