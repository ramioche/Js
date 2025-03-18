//forma uno de inicializar
const arr = new Array(10)
console.log(arr)

//forma 2 de inicializar
let arreglo = [];

let videoJuegos = ["Mario 3", "Megaman", "Chrono Tiger" ]

console.log(videoJuegos);
console.log(videoJuegos[0])

let arregloCosas = [
    true,
    123,
    "fernando",
    1 + 2,
    function(){},
    () => {},
    {
        a: 1,
        b: 2
    },
    ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Wylli", "Woodman"]]
]

console.log(arregloCosas)

//ejercicio: imprimir solo el valor Dr. Ligh
let valorImprimir = arregloCosas[7][4][1];
console.log({valorImprimir})