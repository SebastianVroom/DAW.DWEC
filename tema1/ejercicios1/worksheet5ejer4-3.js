num1 = parseInt(prompt('Deme un numero'))
num2 = parseInt(prompt('Deme otro numero'))
oper = prompt('Deme una operacion')
switch(oper){
    case '+':
        resul = num1 + num2
        break;
    case '-':
        resul = num1 - num2
        break;
    case '*':
        resul = num1 * num2
        break;
    case '/':
        resul = num1 / num2
        break;
}
alert(`El resultado es ${resul}`)
