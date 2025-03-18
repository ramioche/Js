//los dias de semana abrimos a las 11
//los fines de semana abrimos a las 9

const dia = 1;
const horaActual = 11;

let horaApertura ;
let mensaje; //está abriero, está cerradom hoy abrimos a las xx
horaApertura = [0,6].includes(dia) ? 9 : 11;
mensaje = horaActual >= horaApertura ? "Está abierto" : `está cerrado, abrimos a las ${horaApertura}`
// if(dia === 0 || dia == 6){
if([0,6].includes(dia)){
    console.log("fin de semana")
    // horaApertura = 9;
}else{
    console.log("dia de semana")
    // horaApertura = 11
}


// if(horaActual == horaApertura){
//     mensaje = "está abierto"
// }else{
//     mensaje = `está cerrado, abrimos a las ${horaApertura}`
// }
console.log({horaApertura})
console.log({mensaje})