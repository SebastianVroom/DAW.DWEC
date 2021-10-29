document.write('<table border="1px">')
for(i=1; i<=30; i++){
    document.write(`<tr><td>${i}</td><td>${Math.sin((i * Math.PI) / 180)}</td></tr>`)
}
document-write('</table>')