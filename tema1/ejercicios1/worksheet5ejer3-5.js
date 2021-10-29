not1 = parseFloat(prompt("Nota del primer examen"))
not2 = parseFloat(prompt("Nota del segundo examen"))
trab1 = parseFloat(prompt("Nota del primer trabajo"))
trab2 = parseFloat(prompt("Nota del segundo trabajo"))
if (not1 > 4.4 && not2 > 4.4 && trab1 > 4.4 && trab2 > 4.4){
    final = (((not1 * 3) + (not2 * 3) + trab1 + trab2) / 8)
    alert(`Su nota es ${final}`)
}else{
    alert('Necesita una nota de 4.5 o mas en todos los trabajos y examenes')
}
