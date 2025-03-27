const miModulo = (() => {
    'use strict'

    let dek             = [],
        puntosJugadores = [];

    const tipos         = ["C", "D", "H", "S"],
           especiales   = ["A", "J", "Q", "K"];



    //trferencias html
    const   btnPedir             = document.querySelector('#btnPedir'),
            btnDetener           = document.querySelector('#btnDetener'),
            divCartasJugadores   = document.querySelectorAll('.divCartas'),
            btnNuevo             = document.querySelector("#btnNuevo"),
            puntosHtml           = document.querySelectorAll('small')
            
    const inicializarJuego = (numJugadores = 2) => {
        dek = crearDeck();
        puntosJugadores = [];
        for (let index = 0; index < numJugadores; index++) {
            puntosJugadores.push(0);
            
        }
        // //habilitar botones
        btnPedir.disabled = false;
        btnDetener.disabled = false;

        // //limpiar tablero
        divCartasJugadores.forEach( d => {
            d.innerHTML = '';
        })

        //limpiar puntos jugadores
        puntosHtml.forEach(p => {
            p.innerText = '0';
        })
    }

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
        return dek;
    }

    inicializarJuego();

    const pedirCarta = () => {
        if (dek.length === 0) {
            throw new Error("No hay cartas en el dek");
        }
        return dek.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return !isNaN(valor) ? valor * 1 : (valor === "A") ? 11 : 10;
    }

    //eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0)

        crearCarta( carta, 0)
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
        if (puntosJugadores[0] < 1) {
            console.warn("debes pedir al menos una carta")
            return;
        }
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0])
        btnDetener.disabled = true;
    })

    //turno: 0 = primer jugador y el ultimo es la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHtml[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno]
    }

    const crearCarta = (carta, turno) => {
        const imgcarta = document.createElement('img');
        imgcarta.classList.add('carta')
        imgcarta.src = `assets/cartas/${carta}.png`
        divCartasJugadores[turno].append(imgcarta)
    }

    const determinarGanador = () => {
        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("nadie gana.")
            } else if (puntosMinimos > 21) {
                alert("computadora gana")
            } else if(puntosComputadora > 21){
                alert("jugador gana")
            }else{
                alert("computadora gana")
            }
        }, 100);
    }

    //turnoi de la pc
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, (puntosJugadores.length -1))
            crearCarta(carta, puntosJugadores.length -1)
            if (puntosMinimos > 21) {
                break;
            }

        } while ((puntosComputadora < puntosMinimos) && puntosComputadora <= 21);
        determinarGanador();
    }

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();