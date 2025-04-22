
/**
 * toma una carta del deck
 * @param {Array<String>} deck 
 * @returns {Array<string>} retorna la carta extraida del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}