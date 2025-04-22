import { pedirCarta, valorCarta, crearCartaHtml } from "./index";

/**
 * 
 * @param {Number} puntosMinimos la cantidad de puntos minimos que debe alcanzar la computadora para ganar
 * @param {HTMLElement} ElementoHTML elemento html para mostrar los puntos.
 * @param {HTMLElement} divCartasComputadora div para insertar las cartas.
 * @param {Array<String>} deck el deck de donde se extraeran las cartas
 */
// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) {  throw new Error("Puntos minimos son necesario"); }

    if (!deck) {  throw new Error("EL deck es necesario");    }
    
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

