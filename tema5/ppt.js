import {PiePapTij} from '../modulos/PiePapTij.js'
var juego = new PiePapTij()

function info(){
    let punt = juego.puntuaciones()
    let info = document.getElementById('info')
    info.innerHTML = `player: ${punt[0]}, maquina:${punt[1]}`
}

info()

document.getElementById('pie').addEventListener('click',()=>{rondaJuego('piedra')})
document.getElementById('pap').addEventListener('click',()=>{rondaJuego('papel')})
document.getElementById('tij').addEventListener('click',()=>{rondaJuego('tijera')})

function rondaJuego(mano){
    juego.turno(0,mano)
    let gan = juego.ronda()
    let shw = document.getElementById('gan')
    if (gan == 0){
        shw.innerHTML='Ganaste esta ronda con '+juego.jugs[0].mano
    }else if(gan == 1){
        shw.innerHTML='Gano la maquina con '+juego.jugs[1].mano
    }else{
        shw.innerHTML='Empate con '+juego.jugs[0].mano
    }
    info()
}