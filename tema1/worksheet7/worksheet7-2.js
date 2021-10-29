// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), 
// and returns the sum of only the numbers.
function addOnlyNums(...param){
    let resul = 0
    for (e of param){
        resul += (typeof(e) == 'number')? e:0
    }
    return resul
}
document.write('sumamos los numeros del siguiente grupo (1,"platano",9,7,8,"cadena",15,"rabano")<br/>')
document.write(addOnlyNums(1,"platano",9,7,8,"cadena",15,"rabano"))