class Persona {

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.pais = pais
    }

    getInfo(){
        console.log(this)
    }
}

const nombre1 = 'Melissa',
apellido = 'Flores',
pais = 'honduras'

const fernando = {
    nombre: 'fernando',
    apellido: 'pepepepepe',
    pais: 'Venezuela'
}

const persona1 = new Persona(nombre1, apellido, pais)
const persona2 = Persona.porObjeto(fernando)

console.log(persona1);
console.log(persona2);
persona1.getInfo();
