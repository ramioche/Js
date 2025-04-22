
/**
 * Calcular el valor de una carta del deck
 * @param {String} carta 
 * @returns {Number} Retorna el valor numerico de la carta del deck
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}