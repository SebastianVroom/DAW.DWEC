function busca_subcad(cad_arg,subcad_arg){
    if (cad_arg.includes(subcad_arg)){
        document.write(true,cad_arg.indexOf(subcad_arg))
    }else{
        document.write(false)
    }
}
document.write("busca_subcad('La caballeria esta en camino, aguantad unos minutos','camino')<br/>");
busca_subcad('La caballeria esta en camino, aguantad unos minutos','camino');