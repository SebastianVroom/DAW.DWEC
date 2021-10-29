num_col = parseInt(prompt('Numero de columnas'))
alt = parseInt(prompt('Altura'))
anc = parseInt(prompt('Anchura'))
color = "white"
document.write('<table border="0" cellsapcing="2" bgcolor="black" width="' + num_col * anc + '">')
document.write(`<tr height="${alt}">`)
for (i = 1; i <= num_col; i += 1){
    document.write(`<td bgcolor="${color}" width="${anc}">&nbsp;</td>`)
    if (color == "white"){
        color = "black"
    }else{
        color = "white"
    }
}
document.write('</tr></table>')