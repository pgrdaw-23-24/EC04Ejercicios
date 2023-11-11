import * as procesador from './procesadorTexto.js'

let input
let output
let parrafo
let token

// parrafo
input = 'Tres tigres blancos'
parrafo = new procesador.Parrafo(input)
output = parrafo.justificarIzq()
console.log(output)

// token
input = ['Tres tigres blancos', 'justificado izquierda']
token = new procesador.Token(input)
output = token.procesarToken()
console.log(output)




/*
    ['Tres tigres blancos', 'justificado izquierda'],
    ['Comían', 'justificado centro'],
    ['El trigal', 'justificado derecha']
*/