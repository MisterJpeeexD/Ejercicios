// Modulos
const promp = require("prompt-sync")();
const print = function print(...texto){
    console.log(...texto)
}

// Actividad

let persona1 = {
    nombre: "Juan",
    edad: 39,
    saludar: function(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}

print(persona1.nombre)
print(persona1.saludar())

const auto = {
    marca: "Toyota",
    color: "Rojo",
    velocidad: 0,
    acelerar(){
        this.velocidad += 10;
        return `Velocidad actual ${this.velocidad}` 
    },
    frenar(){
        this.velocidad = 0
        return `Haz frenado`
    }
}

print(auto.acelerar())
print(auto.acelerar())
print(auto.acelerar())
print(auto.frenar())