class Aspirador {
    constructor(posx, posy, direccion) {        // direcciones posibles: N, S, E, W
        this.fabricante = 'China'
        this.posx = posx
        this.posy = posy
        this.direccion = direccion
    }

    avanzar() {
        switch (this.direccion) {
            case 'N': this.posy--; break;
            case 'S': this.posy++; break;
            case 'E': this.posx--; break;
            case 'W': this.posy++; break;
            default: throw '[ ERROR ] - direcciones permitidas N, S, E, W'
        }
    }

    girar(sentido) {                // sentidos posibles: D, I
        const direccion = ['W', 'N', 'E', 'S', 'W', 'N']
        let siguiente = 0
        switch (sentido) {
            case 'D': siguiente = 1; break;
            case 'I': siguiente = -1; break;
            default: throw '[ ERROR ] - sentidos permitidas D, I'
        }        
        for (let i = 1; i<=4; i++ ) {
            if (this.direccion == direccion[i]) {
                this.direccion = direccion[i+siguiente]
            }
        }
    }
}

export { Aspirador }