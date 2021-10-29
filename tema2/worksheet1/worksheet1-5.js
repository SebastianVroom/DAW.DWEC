function mostr_relj(){
    tiempo = new Date();
    document.write(`${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}<br/>`);
    setTimeout(mostr_relj, 1000);
}

mostr_relj()