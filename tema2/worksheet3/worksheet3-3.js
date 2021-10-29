function busca_cad(cad_arg,obj){
    let resul = 0;
    while (cad_arg.includes(obj)){
        let i = cad_arg.lastIndexOf(obj);
        cad_arg = cad_arg.slice(0, i - 1);
        resul ++;
    }
    return resul
}
document.write(busca_cad('Como lagrimas en la lluvia','a'))