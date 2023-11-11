import * as aspirador from './apirador.js'

let roomba = []

/*
// aspirador generico
roomba[0] = new aspirador.Aspirador(5,5,'N')
console.log(roomba[0])
roomba[0].avanzar()
roomba[0].girar('I')
console.log(roomba[0])

// aspirador ruso
roomba[1] = new aspirador.AspiradorRuso(5,5,'N')
console.log(roomba[1])
roomba[1].chocar()
console.log(roomba[1])

// aspirador estadounidense
roomba[2] = new aspirador.AspiradorEstadounidense(5,5,'N')
console.log(roomba[2])
roomba[2].chocar()
console.log(roomba[2])
*/

// aspirador estadounidense
roomba[3] = new aspirador.AspiradorEuropeo(5,5,'N')
console.log(roomba[3])
roomba[3].chocar()
roomba[3].avanzar()
roomba[3].avanzar()
roomba[3].avanzar()
roomba[3].avanzar()
console.log(roomba[3])
