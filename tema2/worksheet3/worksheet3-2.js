function mayus_minus(cad_arg){
    if (cad_arg == cad_arg.toUpperCase()){
        document.write('Es todo mayusculas<br/>')
    }
    else if(cad_arg == cad_arg.toLowerCase()){
        document.write('Es todo minusculas<br/>')
    }
    else{
        document.write('Esta mezclado<br/>')
    }
}
mayus_minus('ASSDADXC')
mayus_minus('asdgaddfadsb')
mayus_minus('ASDFdf')