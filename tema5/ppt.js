import {PiePapTij} from '../modulos/PiePapTij.js'
var juego = new PiePapTij()

function info(){
    let punt = juego.puntuaciones()
    let info = document.getElementById('info')
    info.innerHTML = `player 1: ${punt[0]}, player 2:${punt[1]}`
}

info()

document.getElementById('pie').addEventListener('click',()=>{juego.turno(0,'piedra');juego.ronda();info()})