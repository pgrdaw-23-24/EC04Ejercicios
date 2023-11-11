import { Aspirador, AspiradorRuso, AspiradorEstadounidense, AspiradorEuropeo } from "./aspirador.js"


class Sucio {
    constructor(posx, posy) {
        this.posx = posx
        this.posy = posy
        this.simbolo = 'P'
    }
}


class EstacionEspacial {

    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
        this.mapa = this.generarMapaInicial(ancho, alto)
    }

    generarMapaInicial(ancho, alto) {
        let mapa = []
        for (let j = 0; j < alto; j++) {
            mapa.push([])
            for (let i = 0; i < ancho; i++) {
                mapa[j].push(new Sucio(j, i))
            }
        }
        return mapa
    }

    posicionAleatoria() {
        let posx = Math.floor(Math.random() * this.ancho)
        let posy = Math.floor(Math.random() * this.alto)
        return [posx, posy]
    }

    direccionAleatoria() {
        let dir = Math.random
        if (dir < 0.25) {
            return 'N'
        } else if (dir < 0.5) {
            return 'E'
        } else if (dir < 0.75) {
            return 'S'
        } else {
            return 'W'
        }
    }

    anadirRoomba(tipo) {
        let pos = this.posicionAleatoria()
        let dir = this.direccionAleatoria()
        let roomba
        switch (tipo) {
            case 'Ruso':
                roomba = new AspiradorRuso(pos[0], pos[1], dir)
                break;
            case 'Estadounidense':
                roomba = new AspiradorEstadounidense(pos[0], pos[1], dir)
                break;
            case 'Europeo':
                roomba = new AspiradorEuropeo(pos[0], pos[1], dir)
                break;
            default:
                roomba = new Aspirador(pos[0], pos[1], dir)
        }

        this.mapa[pos[0]][pos[1]] = roomba
    }

    mostrarMapa() {
        let mapa = []
        for (let j = 0; j < this.alto; j++) {
            mapa.push([])
            for (let i = 0; i < this.ancho; i++) {
                mapa[j].push(this.mapa[j][i].simbolo)
            }
        }
        return mapa
    }

}


export { EstacionEspacial }


// TESTS
let iss = new EstacionEspacial(6, 4)
//console.log(iss.mapa)
iss.anadirRoomba('R')
console.log(iss.mapa)
console.log(iss.mostrarMapa())

