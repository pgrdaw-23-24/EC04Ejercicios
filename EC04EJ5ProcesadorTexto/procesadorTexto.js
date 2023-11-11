class Parrafo {
    constructor(parrafo) {
        this.parrafo = parrafo
    }

    encajar(ancho) {
        
    }

    justificarIzq() {
        this.parrafo = 'justificarIzq'
        return this.parrafo
    }

    descomponer() {                 // devuelve array de palabras
        const delimitador = ' '
        return this.parrafo.split(delimitador)
    }
}

class Accion {
    constructor(accion) {
        this.accion = accion
    }

    funcion() {
        let acciones = new Map([                            // acciones: Mapa que relaciona accion con funcion
            ['justificado izquierda', 'justificarIzq()'],
            ['justificado derecha', 'justificarDer()'],
            ['justificado centro', 'justificarCen()']
        ])
        return acciones[this.accion]
    }
}


class Token {                                               // token: pareja [ parrafo , accion ]
    constructor(token) {
        this.token = token
        this.parrafo = new Parrafo(token[0])
        this.accion = new Accion(token[1])
    }

    procesarToken() {
        this.parrafo = eval(`this.parrafo.${this.accion.funcion()}`)    // elije funcion partiendo del Map de acciones         
        return this.token
    }
}

class ProcesadorTexto {
    constructor(token) {
        this.token = [...token]
    }

    procesarTexto() {
        for (const t of this.token) {
            t.procesarToken()
        }
    }
}



export { ProcesadorTexto, Token, Parrafo }
