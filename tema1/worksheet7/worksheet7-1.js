// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
function sumtot (...param){
    let resul = 0
    for (e of param){
        resul += e
    }
    return resul
}
document.write('sumamos 1,2,3,4 y 5<br/>')
document.write(sumtot(1,2,3,4,5))