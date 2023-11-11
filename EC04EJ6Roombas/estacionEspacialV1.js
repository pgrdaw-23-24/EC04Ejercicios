import * as Aspirador from "./aspirador.js"

class Suciedad {
    constructor(posx, posy) {
        this.posx = posx
        this.posy = posy
        this.simbolo = '0'
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
                mapa[j].push(new Suciedad(j, i))
            }
        }
        return mapa
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
        let roomba = new Aspirador.Aspirador(pos[0], pos[1], dir)
        switch (tipo) {
            case 'Ruso':
                roomba = new Aspirador.AspiradorRuso(pos[0], pos[1], dir)
                break;
            case 'Estadounidense':
                roomba = new Aspirador.AspiradorEstadounidense(pos[0], pos[1], dir)
                break;
            case 'Europeo':
                roomba = new Aspirador.AspiradorEuropeo(pos[0], pos[1], dir)
                break;
            default:
        }
        this.mapa[pos[1]][pos[0]] = roomba
    }
}

export { EstacionEspacial }
