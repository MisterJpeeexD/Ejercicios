// Operadores matematicos
let a = 10;
let b = 5;

console.log(a + b); // suma
console.log(a - b); // resta
console.log(a * b); // multiplicador
console.log(a / b); // dividir
console.log(a % b); // modulo

// Operadores de asignacion
let x = 10;
x = x + 5
x += 5; // x = x + 5
x -= 5; // x = x - 5

// Operadores de comparacion

console.log(a > b); // a es mayor que b
console.log(a < b); // a es menor que b
console.log(a >= b); // a es mayor o igual que b
console.log(a <= b); // a es menor o igual que b
console.log(a == b); // a es igual que b
console.log(a != b); // a es diferente de b
console.log("Validacion de edad") 
let edad = 18;
console.log(edad >= 18)

// Operadores logicos -> tablas de la verdad - AND

console.log(true && true);
console.log(a==10 && b==5);

console.log(true && false);
console.log(false && false);

// Operadores logicos -> tablas de la verdad - OR

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!false); // No es falso = Es verdadero

// Operadores logicos con negacion
let tieneLicencia = true;
let edadPersona = 29;
console.log(edadPersona >= 18 || tieneLicencia)

// Estrictamente igual
let numero1 = 4
let numero2 = "4"
console.log(numero1 == numero2) // verdadero porque el valor es igual (no considera el tipo de valor)
console.log(numero1 === numero2) // falso porque el valor es igual pero uno es tipo str y el otro es int

// Operadores de incremento y decremento
let numero5 = 5;
numero5++ // numero3 += 1
numero5-- // numero3 -= 1