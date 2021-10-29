// Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.
nums = [13, 12, 45, 43, 12, 3]


function sumEveryOther(param){
    resul = 0
    for(i = 0;i < param.length;i += 2){
        resul += param[i]
    }
    return resul
}
document.write(sumEveryOther(nums))

function sumEveryOtherAlt(...param){
    resul = 0
    for(i = 0;i < param.length;i += 2){
        resul += param[i]
    }
    return resul
}
document.write('<br>')
document.write(sumEveryOtherAlt(13, 12, 45, 43, 12, 3))
