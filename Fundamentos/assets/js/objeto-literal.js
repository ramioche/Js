//objeto literal
let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    cords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Mark 1", "Mark 5", "Mulkbuster"],
    direccion: {
        zip: '10880, 90265',
        ubiccion: "Malibu, California"
    }
}
console.log(personaje)
console.log(personaje.nombre)
console.log(personaje['nombre'])
console.log(personaje.edad)

console.log(personaje.cords)
console.log(personaje.cords.lat)

//Tarea, colocal el numero de trajes de ironman
console.log("Trajes:", personaje.trajes.length)

//tarea, ultimo traje de ironman
console.log("Ultimo traje:", personaje.trajes[personaje.trajes.length -1])

const x = "vivo"
console.log("Vivo:" ,personaje[x])

//obtener todas las claves y valores de un objeto
let properties = Object.entries( personaje )
console.log(properties)

//obtener todos los nombres de las propiedades del objeto
let propiedades = Object.getOwnPropertyNames( personaje )
console.log(properties)

//obtener 