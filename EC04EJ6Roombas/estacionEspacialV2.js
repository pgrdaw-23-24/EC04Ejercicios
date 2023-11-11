import * as Aspirador from "./aspirador.js"

let simboloSuciedad = '0'

class Suciedad {
    constructor(posx, posy) {
        this.posx = posx
        this.posy = posy
        this.simbolo = simboloSuciedad
    }
}

class EstacionEspacial {

    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
        this.mapaObjetos = this.generarMapaObjetosVacio(ancho, alto)    // array 2D de objetos
        this.roomba = []                                    // array de roombas
    }

    generarMapaObjetosVacio(ancho, alto) {
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
                mapa[j].push(this.mapaObjetos[j][i].simbolo)
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
        let dir = Math.random()
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

    tipoRoomba(tipo, pos, dir) {
        let nuevaRoomba
        switch (tipo) {
            case 'Ruso':
                nuevaRoomba = new Aspirador.AspiradorRuso(pos[0], pos[1], dir)
                break;
            case 'Estadounidense':
                nuevaRoomba = new Aspirador.AspiradorEstadounidense(pos[0], pos[1], dir)
                break;
            case 'Europeo':
                nuevaRoomba = new Aspirador.AspiradorEuropeo(pos[0], pos[1], dir)
                break;
            default:
                nuevaRoomba = new Aspirador.Aspirador(pos[0], pos[1], dir)
        }
        return nuevaRoomba
    }

    anadirRoomba(tipo) {
        let pos
        do {        // posicionar roomba en un sitio donde no haya otra
            pos = this.posicionAleatoria()
        } while (this.mostrarMapa()[pos[1]][pos[0]] != simboloSuciedad)
        let dir = this.direccionAleatoria()
        let nuevaRoomba = this.tipoRoomba(tipo, pos, dir)
        this.roomba.push(nuevaRoomba)       // guardar roomba en lista de roombas
        this.mapaObjetos[pos[1]][pos[0]] = nuevaRoomba // guardar roomba en mapa
    }

    /*
    moverRoombas() {
        for (const r of this.roomba) {
            r.avanzar()
            let pos = [r.posx, r.posy]


        }
    }
    */


}

export { EstacionEspacial }
