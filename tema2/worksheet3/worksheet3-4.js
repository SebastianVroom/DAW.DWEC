function organizador(cad_arg){
    let resul=''
    for (l of cad_arg){
        if ('AEIOUaeiou'.includes(l)){
            resul = resul + l
        }
        else if(l != ' '){
            resul = l + resul
        }
    }
    return resul
}
document.write("organizador('y asi es como perdi mi licencia medica')<br/>")
document.write(organizador('y asi es como perdi mi licencia medica'),"<br/>")