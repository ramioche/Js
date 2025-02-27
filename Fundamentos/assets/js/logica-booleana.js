const regresaTrue = () => {
    console.log("Regresa true")
    return true;
}

const regresaFalse = () => {
    console.log("Regresa false")
    return false;
}

console.warn("Not o negacion")
console.log(!true)
console.log(!false)

console.log(!regresaFalse())
console.log(!regresaTrue())