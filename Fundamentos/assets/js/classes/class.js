//clases en js

class Persona {
    static _conteo = 0;
    static get getConteo(){
        return this._conteo
    }

    static mensaje(){
        console.log(this.name); //undefined
        console.log("Hola, sopy un metodo statico");
        
    }
    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    constructor(nombre = "SN", codigo = "SC", frase = "SF") {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `la comida favorita de ${this.codigo} es ${this.comida}`
    }
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi codeName es ${this.codigo}`);
    }

    miFrase (){
        console.log(`${this.codigo} dice; ${this.frase}`);
        
    }

}

const spiderMan = new Persona("Peter Parker", "Spider", "Soy SpiderMan");
console.log(spiderMan);
const ironMan = new Persona("Tony stark", "ironMan", "Yo soy IronMan")
console.log(ironMan);
spiderMan.quienSoy();
ironMan.quienSoy();
spiderMan.miFrase();
ironMan.miFrase();

spiderMan.setComidaFavorita = "Pizza"
console.log(spiderMan);
console.log(spiderMan.getComidaFavorita);
console.log(`conteo estatico: ${Persona._conteo}`);
console.log(Persona.getConteo);
Persona.mensaje();

