const fher = {
    nombre: "Fernando",
    edad: 30,
    imrimir(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: "pedro",
    edad: 15,
    imrimir(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}


const melisa = {
    nombre: "Melisa",
    edad: 15,
    imrimir(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

fher.imrimir();


function Persona(nombre, edad = 10){
    console.log("se ejecutó")
    this.nombre = nombre;
    this.edad = edad,
    this.imrimir = function (){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria', 18)
const melissa = new Persona('Melissa', 21)
maria.imrimir();
melissa.imrimir();