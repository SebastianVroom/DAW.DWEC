num_col = parseInt(prompt('Numero de columnas'))
num_fil = parseInt(prompt('Numero de filas'))
alt = parseInt(prompt('Altura'))
anc = parseInt(prompt('Anchura'))
pri_col_fil = "white"

document.write('<table border="0" cellsapcing="2" bgcolor="black" width="' + num_col * anc + '">')
for(j = 1;j <=num_fil;j += 1){
    color = pri_col_fil
    document.write(`<tr height="${alt}">`)
    for (i = 1; i <= num_col; i += 1){
        document.write(`<td bgcolor="${color}" width ="${anc}">&nbsp;</td>`)
        if (color == "white"){
            color = "black"
        }else{
            color = "white"
        }
    }
    if (pri_col_fil == "white"){
        pri_col_fil = "black"
    }else{
        pri_col_fil = "white"
    }
}
document.write('</tr></table>')