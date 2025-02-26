function saludar(nombre){
    console.log(arguments)
    console.log("Hola " + nombre)
    return 1
}

const saludar2 = function(nombre ){
    console.log("Saludar a " + nombre )
}

//funciones de flecha
const saludarFlecha = (nombre) => {
    console.log("Saludar flecha " + nombre)
}

function sumar(a, b){
    return a + b
}

function getAleatorio(){
    return Math.random() * 10;
}


const getAleatorio2 = () => Math.random() * 10

let nombre = "ramiro"
saludar(nombre, 40, true, "Venezuela");
saludar2(nombre);
saludarFlecha("Ramiro");
console.log(sumar(1, 3))
console.log(getAleatorio())
console.log(getAleatorio2())
