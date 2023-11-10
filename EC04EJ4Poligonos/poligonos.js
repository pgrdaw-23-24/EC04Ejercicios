class Poligono {

    constructor(puntos) {           // matriz [[x1,y1], [x2,y2], ...]]
        this.vertices = puntos
    }

    perimetro() {
        let perimetro = 0
        let saltos = [...this.vertices, this.vertices[0]]     // añadir primera coord al final
        for (let i = 0; i < saltos.length - 1; i++) {
            perimetro += Math.sqrt(
                Math.pow(Math.abs(saltos[i][0] - saltos[i + 1][0]), 2) +
                Math.pow(Math.abs(saltos[i][1] - saltos[i + 1][1]), 2)
            )
        }
        return perimetro
    }
}

class Triangulo extends Poligono {
    constructor(puntos) {
        if (puntos.length == 3 &&                                               // tres puntos
            ((puntos[0][0] - puntos[1][0]) / (puntos[0][1] - puntos[1][1]) !=   // no alineados
                (puntos[0][0] - puntos[2][0]) / (puntos[0][1] - puntos[2][1]))) {
            super(puntos)
        } else {
            throw '[ ERROR ] - Para generar un triángulo debes proporcionar 3 puntos no alineados'
        }
    }
}

class Rectangulo extends Poligono {
    constructor(x, y, w, h) {           // coordx, coordy, width, height
        super([[x, y], [x, y + h], [x + w, y + h], [x + w, y]])
    }
}

class Cuadrado extends Rectangulo {     // coordx, coordy, length
    constructor(x, y, l) {
        super(x, y, l, l)
    }
}

export { Poligono, Cuadrado, Rectangulo, Triangulo }