// Modulos
const promp = require("prompt-sync")();
const print = function print(...texto){
    console.log(...texto)
}

// Actividad

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre,
        this.edad = edad
    }
    saludar(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}

const ana = new Persona("Ana",25)
const juan = new Persona("Juan",30)
const felipe = new Persona("Felipe",26)

print(ana.saludar())
print(juan.saludar())
print(felipe.saludar())