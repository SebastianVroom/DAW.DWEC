for(i = 1;i <= 10;i += 1){
    document.write(`La tabla del ${i}</br></br>`)
    for(j = 1;j <= 10; j += 1){
        document.write(`${i} x ${j} = ${i * j}</br>`)
    }
    document.write('</br>')
}