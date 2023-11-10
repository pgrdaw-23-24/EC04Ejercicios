import * as Poligono from './poligono.js'

let poligono1 = new Poligono.Poligono([[0, 0], [30, 58], [65, 97], [52, 59], [30, 58]])
console.log(poligono1)
console.log(poligono1.vertices)
console.log(poligono1.perimetro())

let rectangulo1 = new Poligono.Rectangulo(1,1,2,3)
console.log(rectangulo1)
console.log(rectangulo1.vertices)
console.log(rectangulo1.perimetro())


let cuadrado1 = new Poligono.Cuadrado(1,1,3)
console.log(cuadrado1)
console.log(cuadrado1.vertices)
console.log(cuadrado1.perimetro())

