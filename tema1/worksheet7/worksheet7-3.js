// Write a function called countTheArgs that can take any number of arguments, and returns the number of arguments that are passed in.
function countTheArgs(...param){
    return param.length
}
document.write("countTheArgs(6,4,'patata')<br/>")
document.write(countTheArgs(6,4,'patata'))