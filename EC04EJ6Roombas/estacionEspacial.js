class EstacionEspacial {

    constructor(ancho, alto) {
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

}


export { EstacionEspacial }


// TESTS
let iss = new EstacionEspacial(6, 4)
console.log(iss.mapa)
