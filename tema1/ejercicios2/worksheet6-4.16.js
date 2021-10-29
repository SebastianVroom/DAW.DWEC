num = parseInt(prompt('Introduzca numero'))
do{
    intento = parseInt(prompt('Intente adivinar'))
    if (intento > num){
        alert('Demasiado alto')
    }else if (intento < num){
        alert('Demasiado bajo')
    }
}while (intento != num)
alert(`ha ganado, el numero era ${num}`)