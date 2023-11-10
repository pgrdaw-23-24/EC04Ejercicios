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
        for (let i = 0; i < this._vertices.length - 1; i++) {
            perimetro += Math.sqrt(
                Math.pow(Math.abs(this._vertices[i][0] - this._vertices[i + 1][0]), 2) +
                Math.pow(Math.abs(this._vertices[i][1] - this._vertices[i + 1][1]), 2)
            )
        }
        perimetro += Math.sqrt(     // el último lado
            Math.pow(Math.abs(this._vertices[this._vertices.length - 1][0] - this._vertices[0][0]), 2) +
            Math.pow(Math.abs(this._vertices[this._vertices.length - 1][1] - this._vertices[0][1]), 2)
        )
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





export { Cuadrado, Rectangulo } //, Triangulo }