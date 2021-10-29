// Exercise 1 - The Age Calculator
var year = new Date().getFullYear();
var annoNacimiento = '1985';
var annos = year - annoNacimiento;
var annos2 = year - annoNacimiento - 1;
document.write('They are either ' + annos + ' or ' + annos2 + ',substituting the values');

// Exercise 2 - The LifeTime Supply Calculator
var currentAge = 29;
var maxAge = 99;
var eatEstimatedPerDay = 1.5; // Kg

var comidaTotalRestoVida = (maxAge - currentAge) * eatEstimatedPerDay;
document.write('<br/>You will need ' + comidaTotalRestoVida + ' to last you until the ripe old age of ' + maxAge);

// Exercise 3 - The Geometrizer (Comentario mal puesto)
var radio = 5;
var area = Math.PI * radio * radio;
var circunferencia = Math.PI * 2 * radio;

document.write('<br>The circumfrence is ' + circunferencia + ' m.'); //(Faltaba cerra cadena)
document.write('<br>The area is ' + area + ' m2.');//(Falta operador +)


// Exercise 4 - The temperature Converter
var celsius = 20;
var celsiusToFarenheit = celsius * 9 / 5 + 32;

var farenheit = 68;
var farenheiToCelsius = (farenheit - 32) * 5 / 9;

document.write('<br/>' + celsius + ' Celsius a Farenheit: ' + celsiusToFarenheit); // (Falta una comilla)
document.write('<br/>' + farenheit + ' Farenheit a Celsius: ' + farenheiToCelsius); //(Falta operador +) (variable mal escrita farenheitToCelsius)

//Exercise 1 - What number's bigger?
//......

function greaterNum(num1, num2) {
	var mayor = num1;
	if (num2 > num1)
		mayor = num2;
	
	return mayor;//(Variable no definida mayor1)
}

document.write('<br/>El mayor es: ' + greaterNum(2, 5));//funct mal escrita greaterrNum, formateo revisado

// Exercise 2 - The World Translator
function helloWorld(language) {
	var saludo = '';
	switch (language) { //var mal escrita langage
		case 'es':
			saludo = 'Hola mundo';
			break;
		case 'fr':
			saludo = 'Bonjour le monde';
			break;
		case 'de':
			saludo = 'Hallo Welt';
			break;
		default:
			saludo = 'Debe especificar algún lenguaje para ' + saludo + ' (es, fr, de)';
	}
	
	return saludo; //var mal esrita salido
}

document.write('<br/>' + helloWorld('es')); //(Faltaba cerrar comentario)