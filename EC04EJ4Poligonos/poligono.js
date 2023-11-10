class Poligono {

    constructor(puntos) {           // matriz [[x1,y1], [x2,y2], ...]]
        this._vertices = puntos
    }

    get vertices() {
        return this._vertices
    }

    lados() {
        return this._vertices.length
    }

    perimetro() {
        let perimetro = 0
        let saltos = [...this._vertices, this._vertices[0]]
        for (let i = 0; i < saltos.length - 1; i++) {
            perimetro += Math.sqrt(
                Math.pow(Math.abs(saltos[i][0] - saltos[i + 1][0]), 2) +
                Math.pow(Math.abs(saltos[i][1] - saltos[i + 1][1]), 2)
            )
        }
        return perimetro
    }

}

class Rectangulo extends Poligono {
    constructor(x, y, w, h) {
        super([[x, y], [x, y + h], [x + w, y + h], [x + w, y]])
    }
}

class Cuadrado extends Rectangulo {
    constructor(x, y, l) {
        super(x, y, l, l)
    }
}



export { Poligono, Cuadrado, Rectangulo } //, Triangulo }