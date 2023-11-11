import procesadorTexto from './procesadorTexto.js'

let input = [
    ['Tres tigres blancos', 'justificado izquierda'],
    ['Comían', 'justificado centro'],
    ['El trigal', 'justificado derecha']
]

let output = procesadorTexto(input)

console.log(output)