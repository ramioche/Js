
let dek = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0;
let puntosComputadora = 0;

//trferencias html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
const btnNuevo = document.querySelector("#btnNuevo");

const crearDeck = () => {
    dek = [];
    //como las cartas numerican van del 2 al 10, el for va en ese mismo rango
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            dek.push(i + tipo)
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            dek.push(esp + tipo)
        }
    }

    //randomizar el orden de los elementos en el arreglo.
    dek = _.shuffle(dek)
    console.log(dek)
    return dek;
}

crearDeck()

const pedirCarta = () => {
    if (dek.length === 0) {
        throw new Error("No hay cartas en el dek");
    }

    const cartaDeLaBaraja = dek.pop();
    // console.log(dek)
    // console.log({cartaDeLaBaraja});
    return cartaDeLaBaraja;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return !isNaN(valor) ? valor * 1 : (valor === "A") ? 11 : 10;
}

let valor = valorCarta(pedirCarta())

//eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const valorCartaActual = valorCarta(carta);
    puntosJugador += valorCartaActual;
    puntosHtml[0].innerText = puntosJugador;

    const imgcarta = document.createElement('img');
    imgcarta.classList.add('carta')
    imgcarta.src = `assets/cartas/${carta}.png`
    divCartasJugador.append(imgcarta);

    if (puntosJugador > 21) {
        console.warn("Perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn("hiciste 21");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }
});


btnDetener.addEventListener('click', () => {
    if (puntosJugador < 1) {
        console.warn("debes pedir al menos una carta")
        return;
    }
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador)
    btnDetener.disabled = true;
})

//turnoi de la pc
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        const valorCartaActual = valorCarta(carta);
        puntosComputadora += valorCartaActual;
        puntosHtml[1].innerText = puntosComputadora;

        const imgcarta = document.createElement('img');
        imgcarta.classList.add('carta')
        imgcarta.src = `assets/cartas/${carta}.png`
        divCartasComputadora.append(imgcarta);
        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && puntosComputadora < 21);

    setTimeout(() => {
        if (puntosComputadora > 21 && puntosJugador <= 21) {
            alert("tu ganas.")
        } else if(puntosComputadora === puntosJugador) {
            alert ("Nadie gana")
        }else{
            alert("la computadora Gana")
        }
    }, 100);


}

btnNuevo.addEventListener('click', () => {
    //reiniciar Deck
    crearDeck();
    //habilitar botones
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    //limpiar tablero de jugador
    divCartasJugador.innerHTML = "";
    
    //ñimpiar tablero de computadora
    divCartasComputadora.innerHTML = "";

    //limpiarPuntos
    puntosComputadora = 0;
    puntosJugador = 0;
    puntosHtml[0].innerText = "0"
    puntosHtml[1].innerText = "0"
});