let a = 10;
let b = a;

console.log(a);


//Operador espread (...objeto)

let frutas = ["Manzana", "Pera", "Uva"]
let otrasFrutas = frutas
//al modificar el objeto Otrasfrutas, tambien se hacen los cambios en el objeto frutas
otrasFrutas.push("Mango")
console.table(frutas)
console.table(otrasFrutas)

//usando el operador spread puedo hacer que losa reglos ya no apunten al mismo sitio de memoria. es decir, 
// se crea un arreglo nuevo con los valores del arreglo original pero apuntan a lugares diferentes de memoria
let carros = ["Honda", "Toyota", "Suzuki"]
let carros2 = [...carros]
carros2.push("Ford")
console.table(carros)
console.table(carros2)

//tambien se puede usar con objetos

//aqui modifico los dos objetos
let ramiro = {nombre:"Ramiro"}
let pedro = ramiro
pedro.nombre = "pedro"

console.log(ramiro)
console.log(pedro)

//aqui modifico solo el segundo objeto
let ana = {nombre:"ana"}
let juan = {...ana}
juan.nombre = "juan"
console.log(ana)
console.log(juan)

//ejercicio
let dias = ["Domingo", "Lines", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
let numeroDia = new Date().getDay()
console.log(dias[numeroDia])