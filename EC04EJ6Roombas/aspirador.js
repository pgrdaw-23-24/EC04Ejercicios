class Aspirador {
    constructor(posy, posx, direccion) {        // direcciones posibles: N, S, E, W
        //this.fabricante = 'China'
        this.tipo = 'Genérico'
        this.simbolo = 'G'
        this.posy = posy
        this.posx = posx
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
        for (let i = 1; i <= 4; i++) {
            if (this.direccion == direccion[i]) {
                this.direccion = direccion[(i + siguiente)]
                break;
            }
        }
    }

    chocar() {
    }
}

class AspiradorRuso extends Aspirador {
    constructor(posy, posx, direccion) {
        super(posy, posx, direccion)
        this.tipo = 'Ruso'
        this.simbolo = 'R'
    }

    chocar() {
        this.girar('I')
    }
}

class AspiradorEstadounidense extends Aspirador {
    constructor(posy, posx, direccion) {
        super(posy, posx, direccion)
        this.tipo = 'Estadounidense'
        this.simbolo = 'A'
    }

    chocar() {
        this.girar('D')
    }
}

class AspiradorEuropeo extends Aspirador {
    constructor(posy, posx, direccion) {
        super(posy, posx, direccion)
        this.tipo = 'Europeo'
        this.simbolo = 'E'
        this.espera = 0

    }

    esperar() {
        if (this.espera <= 0) {
            this.espera = 0
            return false
        } else {
            this.espera--
            return true
        }
    }

    avanzar() {
        if (!this.esperar()) {
            super.avanzar()
        }
    }

    sentidoAleatorio() {
        return Math.random() > 0.5 ? 'D' : 'I'
    }

    chocar() {
        this.espera = 2
        this.girar(this.sentidoAleatorio())
    }
}

export { Aspirador, AspiradorRuso, AspiradorEstadounidense, AspiradorEuropeo }