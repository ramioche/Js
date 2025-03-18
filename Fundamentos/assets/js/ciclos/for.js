const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"]
console.warn("for tradicional")

for (let index = 0; index < heroes.length; index++) {
    console.log(heroes[index])
}

console.warn("for in")
for (let i in heroes){
console.log(heroes[i])
}

console.warn("for of")
for(let heroe of heroes){
console.log(heroe)
}