
let dek =           [];
const tipos =       ["C", "D", "H", "S"];
const especiales =  ["A", "J", "Q", "K"]

const crearDeck = () =>{
    //como las cartas numerican van del 2 al 10, el for va en ese mismo rango
    for (let i = 2; i <= 10; i++) {    
        for(let tipo of tipos){
            dek.push(i + tipo)
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
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
    console.log(dek)
    console.log({cartaDeLaBaraja});
    return cartaDeLaBaraja;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return !isNaN(valor) ? valor * 1 : (valor === "A") ? 11 : 10;
}

let valor = valorCarta(pedirCarta())
console.log(valor)