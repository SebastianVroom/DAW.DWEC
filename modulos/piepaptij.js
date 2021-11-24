
class Jugador{
    construnctor(id){
        this.mano = ''
        this.id = id
    }
}

class PiePapTij{
    constructor(id,maquina = true){
        this.jugs = [new Jugador(0),new Jugador(1)]
        this.maquina = maquina
        this.punt = []
        this.idronda = 0
    }

    turno(id,mano){
        if (id === 0){
            this.jugs[id].mano=mano
        }else if((!this.maquina) && id === 1){
            this.jugs[id].mano=mano
        }
    }

    ronda(){
        this.idronda ++
        if (this.maquina){
            let poss = Math.floor(Math.random()*3)
            if(poss == 0){
                this.jugs[1].mano = 'tijera'
            }else if(poss == 1){
                this.jugs[1].mano = 'piedra'
            }else{
                this.jugs[1].mano = 'papel'
            }
        }
        if (this.jugs.every((e)=>e.mano !== '')){
            if (this.jugs[0].mano == 'piedra' && this.jugs[1].mano == 'tijera'){
                this.punt.push([this.idronda,0])
                return 0
            }else if (this.jugs[0].mano == 'piedra' && this.jugs[1].mano == 'papel'){
                this.punt.push([this.idronda,1])
                return 1
            }else if (this.jugs[0].mano == 'papel' && this.jugs[1].mano == 'piedra'){
                this.punt.push([this.idronda,0])
                return 0
            }else if (this.jugs[0].mano == 'papel' && this.jugs[1].mano == 'tijera'){
                this.punt.push([this.idronda,1])
                return 1
            }else if (this.jugs[0].mano == 'tijera' && this.jugs[1].mano == 'papel'){
                this.punt.push([this.idronda,0])
                return 0
            }else if (this.jugs[0].mano == 'tijera' && this.jugs[1].mano == 'piedra'){
                this.punt.push([this.idronda,1])
                return 0
            }else{
                return -1
            }
        }
    }

    puntuaciones(){
        return this.punt.reduce((acu, el)=>acu[el[1]]++,[0,0])
    }
}
export{PiePapTij}