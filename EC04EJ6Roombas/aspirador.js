class Aspirador {
    constructor(posx, posy, direccion) {        // direcciones posibles: N, S, E, W
        this.fabricante = 'China'
        this.tipo = 'Genérico'
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
    constructor(posx, posy, direccion) {
        super(posx, posy, direccion)
        this.tipo = 'Ruso'
    }

    chocar() {
        this.girar('I')
    }
}

class AspiradorEstadounidense extends Aspirador {
    constructor(posx, posy, direccion) {
        super(posx, posy, direccion)
        this.tipo = 'Estadounidense'
    }

    chocar() {
        this.girar('D')
    }
}

class AspiradorEuropeo extends Aspirador {
    constructor(posx, posy, direccion) {
        super(posx, posy, direccion)
        this.tipo = 'Europeo'
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

// TESTS

let roomba = []

/*
// aspirador generico
roomba[0] = new Aspirador(5,5,'N')
console.log(roomba[0])
roomba[0].avanzar()
roomba[0].girar('I')
console.log(roomba[0])

// aspirador ruso
roomba[1] = new AspiradorRuso(5,5,'N')
console.log(roomba[1])
roomba[1].chocar()
console.log(roomba[1])

// aspirador estadounidense
roomba[2] = new AspiradorEstadounidense(5,5,'N')
console.log(roomba[2])
roomba[2].chocar()
console.log(roomba[2])
*/

// aspirador estadounidense
roomba[3] = new AspiradorEuropeo(5,5,'N')
console.log(roomba[3])
roomba[3].chocar()
roomba[3].avanzar()     // esperar
console.log(roomba[3])
roomba[3].avanzar()     //esperar
roomba[3].avanzar()
roomba[3].avanzar()
console.log(roomba[3])


export { Aspirador, AspiradorRuso, AspiradorEstadounidense, AspiradorEuropeo }