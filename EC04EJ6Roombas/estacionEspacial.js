import * as Aspirador from "./aspirador.js"

let simboloSuciedad = '0'

class Polvo {
    constructor(posy, posx, altura) {
        this.tipo = 'polvo'
        this.posy = posy
        this.posx = posx
        this.simbolo = 0        // la altura del polvo se representa en mm
    }

    depositar() {
        if (this.simbolo < 9) {
            this.simbolo++
        }

    }
}

class EstacionEspacial {

    constructor(alto, ancho) {
        this.alto = alto
        this.ancho = ancho
        this.mapa = this.reiniciarMapaObjetos(alto, ancho)    // array 2D de objetos
        this.roomba = []                                        // array de roombas
    }

    reiniciarMapaObjetos(alto, ancho) {
        let mapa = []
        for (let j = 0; j < alto; j++) {
            mapa.push([])
            for (let i = 0; i < ancho; i++) {
                mapa[j].push(new Polvo(i, j, 0))
            }
        }
        return mapa
    }

    mostrarMapa() {
        let mapa = []
        for (let j = 0; j < this.alto; j++) {
            mapa.push([])
            for (let i = 0; i < this.ancho; i++) {
                mapa[j].push(this.mapa[j][i].simbolo.toString())
            }
        }
        return mapa
    }

    posicionAleatoria() {
        let posy = Math.floor(Math.random() * this.alto)
        let posx = Math.floor(Math.random() * this.ancho)
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
        this.mapa[pos[1]][pos[0]] = nuevaRoomba // guardar roomba en mapa
    }

    aumentarPolvo() {
        for (let j = 0; j < this.alto; j++) {
            for (let i = 0; i < this.ancho; i++) {
                if (this.mapa[j][i].tipo == 'polvo') {
                    this.mapa[j][i].depositar()
                }
            }
        }
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
