import * as Aspirador from './aspirador.js'
import * as Estacion from './estacionEspacial.js'

/*
let roomba = []

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

// aspirador estadounidense
roomba[3] = new AspiradorEuropeo(5,5,'N')
console.log(roomba[3])
roomba[3].chocar()
roomba[3].avanzar()     // esperar
console.log(roomba[3])
roomba[3].avanzar()     //esperar
roomba[3].avanzar()
roomba[3].avanzar()
console.log(roomba[3])*/

let iss 
iss = new Estacion.EstacionEspacial(6,4)
iss.anadirRoomba()
iss.anadirRoomba('Ruso')
iss.anadirRoomba('Estadounidense')
iss.anadirRoomba('Europeo')
//console.log(iss.mapa)
console.log(iss.mostrarMapa())

