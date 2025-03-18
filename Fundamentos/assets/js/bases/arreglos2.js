//propiedades y metodos basicos de los arreglos
let juegos = ['Zelda', 'Mario', 'Metroid', "chrono"]
//Longitud del arreglo
console.log("Longitud:", juegos.length)

//ultimo elemento en el arreglo
console.log(juegos[juegos.length -1])

//cada elemento del arreglo
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr})
})

//añador un elemento al final arreglo y retorna la nueva longitud del arreglo
let nuevaLongitud = juegos.push("F-Zero")
console.log({nuevaLongitud, juegos})

//insertar un elemento al inicio del areglo, retorna la nueva longitud
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({nuevaLongitud, juegos})


//eliminar el ultimo juego del array
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})

//borar un juego en la posicion especifica
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegos, juegosBorrados})

//conocer la posicion de un elemento del arrglo
let indiceDelJuego = juegos.indexOf("Metroid");
console.log({indiceDelJuego});