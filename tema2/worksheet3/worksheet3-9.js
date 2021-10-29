function tablas (cad_arg){
    document.write('<table><tr>')
    for(l of cad_arg){
        document.write(`<td>${l}</td>`)
    }
    document.write('</tr>')
    for (let i = 1;i<=cad_arg.length - 2;i++){
        document.write(`<tr><td>${cad_arg[i]}</td>`)
        for (let j = 1; j <= cad_arg.length - 2; j++){
            document.write('<td></td>')
        }
        document.write(`<td>${cad_arg[cad_arg.length - i - 1]}</td></tr>`)
    }
    document.write('<tr>')
    for (let k = cad_arg.length - 1; k >= 0;k--){
        document.write(`<td>${cad_arg[k]}</td>`)
    }
    document.write('</tr></table>')
}
tablas('PEPINILLOS')
tablas('PERRO')