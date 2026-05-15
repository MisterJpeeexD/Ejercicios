// Modulos
const prompt = require("prompt-sync")();

// Forma 1 de crear una funcion
console.log("Forma 1 de crear una funcion")
function saludar(){
    return "Hola Mundo desde una funcion normal"
}
saludar() // Retorna el valor resultante de una funcion
console.log(saludar()) // Retorna el valor resultante de una funcion pero imprimiendo el resultado
console.log()

console.log("Forma 1 de crear una funcion - Si no hay un valor a devolver, no funcionara el return")
// Forma 1 de crear una funcion - Si no hay un valor a devolver, no funcionara el return
function saludarAnon(){
    let texto = "Hola Mundo desde una funcion normal"
}
saludarAnon() // Devolvera "undefined" ya que no existe un valor a devolver
console.log()

// Forma 2 de crear una funcion anonima
console.log("Forma 2 de crear una funcion anonima")
let nombreFuncion = function(){
    return "Hola Mundo desde funcion anonima"
}

nombreFuncion();
console.log(nombreFuncion())
console.log()

// Forma 3 de crear una funcion flecha (arrow)
console.log("Forma 3 de crear una funcion flecha (arrow)")
let function1 = () => {return "Hola Mundo desde una funcion arrow"}

function1()
console.log()

// tipo de dato
console.log("Tipo de dato")
console.log(typeof(function1))
console.log()

// Utilizacion de parametros
console.log("Utilizacion de parametros")
function saludarUsuario(nameUser, edad){
    return `Hola ${nameUser}, tienes ${edad} años.`;
}
console.log()
console.log(saludarUsuario("Felipe",38));
console.log(saludarUsuario("Raul",10));
saludarUsuario("Maria",40)
saludarUsuario("Carla",2)
console.log()