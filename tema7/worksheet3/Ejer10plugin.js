//needs Jquery
$('.passform').keyup(function(e){
    if(e.target.value.length < 5){
        $('.passinfo').html('Contraseña debil') 
    }else if(e.target.value.length < 8){
        $('.passinfo').html('Contraseña medianamente segura') 
    }else{
        $('.passinfo').html('Contraseña segura') 
    }
})