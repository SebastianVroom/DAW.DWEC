num_col = parseInt(prompt('Numero de columnas'))
alt = parseInt(prompt('Altura'))
anc = parseInt(prompt('Anchura'))
i = 1

document.write('<table border="0" cellsapcing="2" bgcolor="black" width="' + num_col * anc + '">')
document.write(`<tr bgcolor="white" height="${alt}">`)

while (i <= num_col){
    document.write(`<td width ="${anc}">&nbsp;</td>`)
    i += 1
}
document.write('</tr></table>')