function anadirCabecera(ancho) {

    let cabecera = ""
    for (let i = 1; i <= ancho; i++) {
        cabecera += i % 10
    }
    return cabecera + '\n'
}

function recortarEnteras(textoEntrada, ancho) {
    let textoSalida = ""
    while (textoEntrada.length > ancho) {
        textoSalida += textoEntrada.substring(0, ancho) + '\n'
        textoEntrada = textoEntrada.substring(ancho)
    }
    return textoSalida
}

function recortarResto(textoEntrada, ancho) {
    let textoSalida = textoEntrada
    while (textoSalida.length > ancho) {
        textoSalida = textoSalida.substring(ancho)
    }
    return textoSalida
}

function justificarIzquierda(textoEntrada, ancho) {
    let textoSalida = ""
    textoSalida += recortarEnteras(textoEntrada, ancho)
    textoEntrada = recortarResto(textoEntrada, ancho)
    return textoSalida
}


function realizarAccion(textoEntrada, accion, ancho) {
    let textoSalida = ""

    switch (accion) {             // accion
        case 'justificado izquierda':
            textoSalida += justificarIzquierda(textoEntrada, ancho)
            break;
        case 'justificado derecha':
            textoSalida += 'justificado derecha\n'
            break;
        case 'justificado centro':
            textoSalida += 'justificado centro\n'
            break;
    }
    return textoSalida
}

function procesadorTexto(arrayParrafosAcciones) {    // args [[texto1, accion1], [texto2, accion2]...]
    let textoSalida = ""
    let ancho = 15
    let token = [...arrayParrafosAcciones]

    textoSalida += anadirCabecera(ancho)

    for (let i = 0; i < token.length; i++) {
        textoSalida += recortarEnteras(token[i][0])
        textoSalida += realizarAccion(recortarResto(token[i][0]), token[i][1], ancho)
    }

    return textoSalida
}

// tests
let token = [
    ['Tres tigres blancos Tres tigres blancos', 'justificado izquierda'],
    ['Comían', 'justificado centro'],
    ['El trigal', 'justificado derecha']
]
let ancho = 15
console.log(anadirCabecera(ancho))
console.log(recortarEnteras(token[0][0], 15))
console.log(recortarResto(token[0][0], 15))
console.log(procesadorTexto(token))

export default procesadorTexto
