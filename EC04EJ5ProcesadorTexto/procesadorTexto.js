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
        textoSalida += textoEntrada.substring(0, ancho - 1)
        textoEntrada = textoEntrada.substring(ancho, )
    }
    return textoSalida
}

function recortarResto(textoEntrada, ancho) {
    let textoSalida = ""
    while (textoEntrada.length > ancho) {
        textoSalida += textoEntrada.substring(0, ancho - 1)
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

function procesadorTexto(arrayParrafosAcciones) {    // args [texto1, accion1], [texto2, accion2]...
    let textoSalida = ""
    let ancho = 15
    let token = [...arrayParrafosAcciones]

    textoSalida += anadirCabecera(ancho)

    for (let i = 0; i < token.length; i++) {
        textoSalida += realizarAccion(token[i][0], token[i][1], ancho)
    }

    return textoSalida
}


export default procesadorTexto
