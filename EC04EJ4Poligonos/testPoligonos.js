import * as Poligono from './poligonos.js'

let poligono1 = new Poligono.Poligono([[0, 0], [30, 58], [65, 97], [52, 59], [30, 58]])
console.log(poligono1)
console.log('Perimetro:',poligono1.perimetro())

let triangulo1 = new Poligono.Triangulo([[0, 0], [1, 2], [-2, -5]])
console.log(triangulo1)
console.log('Perimetro:',triangulo1.perimetro())

let rectangulo1 = new Poligono.Rectangulo(1,1,2,3)
console.log(rectangulo1)
console.log('Perimetro:',rectangulo1.perimetro())

let cuadrado1 = new Poligono.Cuadrado(1,1,3)
console.log(cuadrado1)
console.log('Perimetro:',cuadrado1.perimetro())

