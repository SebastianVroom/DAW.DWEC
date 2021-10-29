a = parseInt(prompt('primer coeficiente'))
b = parseInt(prompt('segundo coeficiente'))
c = parseInt(prompt('tercer coeficiente'))
diferencial = (b**2)-4*a*c
if (diferencial >= 0){
diferencial = Math.sqrt(diferencial)
resul1 = (-b - diferencial)/ 2*a
resul2 = (-b + diferencial)/ 2*a
document.write('Resultados: ',resul1,' y ',resul2)}
else{
    alert('Esta ecuacion no tiene soluciones reales')
}