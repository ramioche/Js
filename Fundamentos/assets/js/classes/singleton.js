class Singleton {
    static instancia;
    nombre = ''
    constructor(nombre = '') {
        if(Singleton.instancia !== undefined){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre
        return this;
    }
}

const instancia1 = new Singleton("IronMan")
const instancia2 = new Singleton("spiderMan")
const instancia3 = new Singleton("blackPanthe")

console.log(`el nombre de la instancia 1 es ${instancia1.nombre}`);
console.log(`el nombre de la instancia 2 es ${instancia2.nombre}`);
console.log(`el nombre de la instancia 3 es ${instancia3.nombre}`);
