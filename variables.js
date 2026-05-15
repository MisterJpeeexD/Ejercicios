// Esto es un comentario
// Otro comentario
/* 
Comentario completo sin necesidad de colocar // al principio de cada comentario
*/
// Hello world - Print

console.log("Hello world");

// Variables
let nombre = "Juan"; // let cambia
console.log(nombre)
const rut = "20202020-2" // const nunca cambia
var edad = 32;

if(true){
    // Global
    var x = 10;
    // Local
    let y = 5;
    console.log(y);
}

console.log(x);

// Camelcase es variables UsuarioCreado

let variableString = "Soy un texto";
let variableNumber = 32;
let variableBoolean = true; // false
let variableNull = null;
let variableUndefined;
console.log(variableUndefined);
console.log(variableNull);

// Tipos de datos estructuras dinamicas
let variableObjeto = {
    nombre: "Felipe",
    datoEdad: 46,
    datoComuna: "Maipu"
};

let variableArray = ["Supermercado", 2, true, "Elemento4", ["lista"]];

console.log(variableObjeto);
console.log(typeof(variableArray));
console.log(typeof(variableObjeto));
console.log(typeof(variableString));
console.log(typeof(variableNumber));
console.log(typeof(variableBoolean));
console.log(typeof(variableNull));
console.log(typeof(variableUndefined));


