import * as aspirador from './apirador.js'

let aspirador1

aspirador1 = new aspirador.Aspirador(5,5,'N')
console.log(aspirador1)
aspirador1.avanzar()
aspirador1.girar('D')
console.log(aspirador1)

