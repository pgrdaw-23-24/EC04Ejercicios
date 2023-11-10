import * as Poligono from './poligono.js'

// const PUNTOS = [[100, 40], [30, 568], [654, 987], [52, 596]]

let rectangulo1 = new Poligono.Rectangulo(1,1,1,2)
console.log(rectangulo1)
console.log(rectangulo1.vertices)
console.log(rectangulo1.lados())
console.log(rectangulo1.perimetro())


let cuadrado1 = new Poligono.Cuadrado(1,1,2)
console.log(cuadrado1)
console.log(cuadrado1.vertices)
console.log(cuadrado1.lados())
console.log(cuadrado1.perimetro())

