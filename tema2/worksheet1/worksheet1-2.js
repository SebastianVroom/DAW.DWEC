var fechaHoy = new Date();
document.write(fechaHoy,"<br/>");
var fecha85 = new Date(fechaHoy.getTime());
var fecha187 = new Date(fechaHoy.getTime());
fecha85.setDate(fecha85.getDate()+85);
document.write(fecha85,"<br/>");
fecha187.setDate(fecha187.getDate()-187);
document.write(fecha187,"<br/>");
fecha85.setFullYear(fecha85.getFullYear()+2);
document.write(fecha85,"<br/>");
fecha187.setHours(fecha187.getHours()-24);
document.write(fecha187,"<br/>");
fechaResto = fecha85 - fecha187;
document.write(fechaResto)