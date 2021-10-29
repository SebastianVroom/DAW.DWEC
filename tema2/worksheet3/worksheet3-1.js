function invierteCadena(cad_arg){
    let resul = cad_arg.split('').reverse().join('')
    return resul
}
document.write(invierteCadena('Hola'),'<br/>')

function inviertePalabras(cad_arg){
    let resul = cad_arg.split(' ').reverse().join(' ')
    return resul.trim()
}
document.write(inviertePalabras('Hola Don Pepito buen tiempo tenemos'),'<br/>')

function encuentraPalabraMasLarga(cad_arg){
    let palabras = cad_arg.split(' ')
    let resul = 0
    for (p of palabras){
        resul = (resul < p.length)?p.length:resul
    }
    return resul
}
document.write(encuentraPalabraMasLarga('Hola Don Pepito buen tiempo tenemos'),'<br/>')

function filtraPalabrasMasLargas(cad_arg,i){
    let palabras = cad_arg.split(' ')
    let resul = 0
    for (p of palabras){
        resul = (p.length >= i)?resul + 1:resul
    }
    return resul
}
document.write(filtraPalabrasMasLargas('Hola Don Pepito buen tiempo tenemos',5),'<br/>')

function cadenaBienFormada(cad_arg){
    return cad_arg[0].toUpperCase() + cad_arg.slice(1).toLowerCase()
}
document.write(cadenaBienFormada('hola Don Pepito buen tiempo tenemos'),'<br/>')