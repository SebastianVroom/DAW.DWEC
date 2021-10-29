num_col = parseInt(prompt('Numero de columnas'))
num_fil = parseInt(prompt('Numero de filas'))
alt = parseInt(prompt('Altura'))
anc = parseInt(prompt('Anchura'))
document.write('<table border="0" cellsapcing="2" bgcolor="black" width="' + num_col * anc + '">')
for(j = 1;j <=num_fil;j += 1){
document.write(`<tr bgcolor="white" height="${alt}">`)
for (i = 1; i <= num_col; i += 1){
    document.write(`<td width ="${anc}">&nbsp;</td>`)
}
}
document.write('</tr></table>')