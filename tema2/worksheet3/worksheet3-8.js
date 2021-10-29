function cuenta_palabras(cad_arg){
    let palabras = cad_arg.split(' ')
    let resul = 0
    for (p of palabras){
        if (p){
            resul ++
        }
    }
    return resul
}
document.write("cuenta_palabras('Buen   desenladrillador     sera ')<br/>")
document.write(cuenta_palabras('Buen   desenladrillador     sera '))