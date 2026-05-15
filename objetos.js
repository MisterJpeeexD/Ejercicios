let persona = {
    nombre: "Juan Perez",
    edad: 25,
    ciudad: "Santiago",
    estado: true
};

console.log(persona.nombre);
console.log(persona["nombre"]);

persona.edad = 26; // Modificando
persona.profesion = "Dev"; // Agregando

console.log(persona)

delete persona.ciudad;

console.log(persona)

// Recorrer objeto
// Nota, en objetos, las posiciones se reemplazan por claves | 1 => nombre
console.log()
for(let clave in persona){
    console.log(clave+":", persona[clave])
}

// Metodo keys: Me devuelve lo que define lo interior de un objeto sin entregar el valor [Nombre, edad, estado]
console.log()
console.log(Object.keys(persona));

// Metodo values: Me devuelve lo que define lo interior de un objeto entregando solo el valor [Felipe, 22, true]
console.log()
console.log(Object.values(persona));

// Metodo Entries: Devuelve los valores mas formateados:
// [Nombre: Felipe]
// [Edad: 22]
// [Estado: true]
console.log()
console.log(Object.entries(persona));

// Llamar valor de objeto en objeto
console.log()
let usuario = {
    nombre: "Juan Perez",
    direccion: {
        ciudad: "Santiago",
        pais: "Chile"
    },
    hobbies: ["programar", "leer"],
    edad: 23
}

//          array
//            ^      clave
//            |        ^    sub-clave  
//            |        |       ^  
console.log(usuario.direccion.pais)