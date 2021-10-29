num_col = parseInt(prompt('Numero de columnas'))
alt = parseInt(prompt('Altura'))
anc = parseInt(prompt('Anchura'))
color = "white"
i = 1

document.write('<table border="0" cellsapcing="2" bgcolor="black" width="' + num_col * anc + '">')
document.write(`<tr height="${alt}">`)
while (i <= num_col){
    document.write(`<td bgcolor="${color}" width="${anc}">&nbsp;</td>`)
    if (color == "white"){
        color = "black"
    }else{
        color = "white"
    }
    i += 1
}
document.write('</tr></table>')