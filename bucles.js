const prompt = require("prompt-sync")();

// Variables

let edad = parseInt(prompt("Cual es tu edad: "))

// Codigo condicional
console.log()
if(edad >= 18){ // si edad es mayor o igual a 18, ejecutar lo siguiente
    console.log("Eres mayor de edad") // Imprimir eres mayor de edad
    edadProxima = edad+1 // En variable edadProxima definir la suma de edad y 1 
    console.log("El proximo año tendras",edadProxima) // Imprimir El proximo año tendras (agregar) edadProxima
} else if(edad >=12 && edad <= 17){
    console.log("Eres adolescente")
    edadProxima = edad+1
    console.log("El proximo año tendras",edadProxima)
} else {
    console.log("Eres un niño")
    edadProxima = edad+1
    console.log("El proximo año tendras",edadProxima)
}
console.log()

// Codigo bucle
// Calculadora de tabla hasta el 12, n*1~12

let n1 = prompt("Ingresa el numero a multiplicar: ")
let n2 = 1
while(n2<=12){
    console.log(n1*n2)
    n2++
}

// Codigo bucle 2

console.log()
while(true){
    let edadNueva = parseInt(prompt("Ingresa tu edad: "))
        if(edadNueva >= 18){
            console.log("Eres mayor de edad")
            edadProxima = edadNueva+1
            console.log("El proximo año tendras",edadProxima)
            break
        } else if(edadNueva >=12 && edadNueva <= 17){
            console.log("Eres adolescente")
            edadProxima = edadNueva+1
            console.log("El proximo año tendras",edadProxima)
            break
        } else if(edadNueva <= 11 && edadNueva >= 0){
            console.log("Eres un niño")
            edadProxima = edadNueva+1
            console.log("El proximo año tendras",edadProxima)
            break
        } else {
            console.log("Valor invalido, intentalo de nuevo")
            break
        }
    }
    

console.log("Bucle For");
console.log()
let i = parseInt(prompt("Indique el valor de inicio: "));
for(i; i<=10; i=i*2){
    console.log(i)
}


let frutas = ["Manzana","Pera","Uvas","Sandia"]

console.log(frutas[0])
console.log(frutas.indexOf("Pera"))

// Recorre valores (manzana, peras, uvas, etc...)

for(let fruta of frutas){
    if(fruta=="Pera"){
        console.log("Postre de Pera")
    } else {
        console.log("Hare otro postre")
    }
}
 
// Recorre valores
for(let posicion in frutas){
    console.log(frutas[posicion])
}


// Enlistar
for(let pos in frutas){
    console.log(parseInt(pos)+1+". "+frutas[pos])
}



rol = "admin"

if(rol == "admin"){
    console.log("Tiene acceso total")
} else {
    console.log("No tiene acceso total")
}

let continuar = true;

while(continuar){
    let rol = prompt("Cual es tu rol?: ");
    switch(rol){
        case "admin":
            console.log("Tiene acceso total");
            continuar = false; // Cambiamos la condición para cerrar el bucle
            break
        case "editor":
            console.log("Puede editar");
            continuar = false;
            break
        case "usuario":
            console.log("Puede ver");
            continuar = false;
            break
        default:
            console.log("Usuario invalido, reintente.");
            // Aquí no cambiamos 'continuar', por lo que pedirá el dato de nuevo
    }
}