function busca_palindromo(cad_arg){
    for (let i = 0;i <= cad_arg.length / 2;i++){
        if (cad_arg[i] != cad_arg[cad_arg.length - i - 1]){
            return false
        }
    }
    return true
}
document.write("busca_palindromo('asdfdsa')<br/>")
document.write(busca_palindromo('asdfdsa'),'<br/>')
document.write("busca_palindromo('casa')<br/>")
document.write(busca_palindromo('casa'),'<br/>')