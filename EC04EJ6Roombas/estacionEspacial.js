class EstacionEspacial {

    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
        this.mapa = this.generarMapaInicial(ancho, alto)
    }

    generarMapaInicial(ancho, alto) {
        let mapa = []
        for (let i = 0; i < alto; i++) {
            mapa.push([])
            for (let j = 0; j < ancho; j++) {
                mapa[i].push('X')
            }
        }
        return mapa
    }

    posicionAleatoria() {
        let posx = Math.floor(Math.random() * this.ancho)
        let posy = Math.floor(Math.random() * this.alto)
        return [posx, posy]
    }

    anadirRoomba(tipo) {
        let pos = this.posicionAleatoria()
        this.mapa[pos[0]][pos[1]] = tipo
    }

}


export { EstacionEspacial }


// TESTS
let iss = new EstacionEspacial(6, 4)
console.log(iss.mapa)
iss.anadirRoomba('R')
console.log(iss.mapa)

