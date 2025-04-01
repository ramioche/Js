//Herencia

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

class Heroe extends Persona {
    clan = "";
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = "Los Avengers"
    }

    quienSoy(){
        console.log(`${this.codigo}, ${this.clan}`);
        super.quienSoy();
    }
}

// const spiderMan = new Persona("Peter Parker", "Spider", "Soy SpiderMan");
const spiderMan = new Heroe("Peter Parker", "Spider", "Soy SpiderMan");
console.log(spiderMan);
spiderMan.quienSoy();