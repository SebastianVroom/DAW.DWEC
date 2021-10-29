function sin_repeticion(cad_arg){
    let resul = '';
    for (l of cad_arg){
        if (!resul.includes(l)){
            resul = resul + l;
        }
    }
    return resul
}
document.write("sin_repeticion('titanic, el barco insumergible)'<br/>");
document.write(sin_repeticion('titanic, el barco insumergible'));