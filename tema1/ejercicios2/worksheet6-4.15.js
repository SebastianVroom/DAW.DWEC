num = parseInt(prompt('Introduzca numero'))
var intento
while (intento != num){
    intento = parseInt(prompt('Intente adivinar'))
    if (intento > num){
        alert('Demasiado alto')
    }else if (intento < num){
        alert('Demasiado bajo')
    }
}
alert(`ha ganado, el numero era ${num}`)