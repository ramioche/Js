function crearPersona(nombre, apellido){
    return {
        nombre,
        apellido
    }
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido})

function imprimirArgumentos(){
    console.log(arguments)
}

//en este caso, para poder obtener los argumentos, se debe usar la sintaxis "...args"
//si se requiere enviar mas de un parametro y poder utilizar args, entonces "..args" va de ultimo.
const ImprimirArgumentosEnFuncionDeFlecha = (edad, ...args) => {
    console.log({edad, args})
}

let response = crearPersona("Ramiro", "Marimon")
let response2 = crearPersona2("Ramiro", "Marimon")
console.log(response);
console.log(response2);
imprimirArgumentos("Ramiro", "Marimon", 1, true)
ImprimirArgumentosEnFuncionDeFlecha("Ramiro", "Pedro", "Juan")