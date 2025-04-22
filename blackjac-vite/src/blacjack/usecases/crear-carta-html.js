

/**
 * Crea una carta en el div del jugador de turno
 * @param {String} carta codigo de la carta a ser creada
 * @returns {HTMLImageElement} elemento html de retorno
 */
export const crearCartaHtml = ( carta ) => {

    if(!carta){throw new Error("La carta es obligatoria");}

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}