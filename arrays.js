// Creacion array
let array = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"]

// Para acceder a una array
console.log(array[2])

// Para acceder al ultimo elemento de la array
console.log(array[array.length - 1])

// Metodos de array
// Agregar elementos al array al final
array.push("Elemento 5")
console.log(array)

// Elimina el ultimo elemento de la array
array.pop()
console.log(array)

// Recorre todo el array y ejecuta una accion
//
//                  Llama a la array
//                         ^    Accion solicitada
//                         |           ^
//                         |           | 
let nuevoArray = array.map(e => e.toUpperCase())
console.log(nuevoArray)

// Recorre todo el array y filtra
let listaNumeros = [1,2,3,4,5,6]
//
//                              Llama a la array
//                                     ^  Accion solicitada
//                                     |         ^
//                                     |         | 
let mayoresTres = listaNumeros.filter(num => num > 3)
console.log(mayoresTres)

// Duplicar valores en array
//
//                                     Llama a la array
//                                             ^  Accion solicitada
//                                             |       ^
//                                             |       | 
let listaNumerosDuplicados = listaNumeros.map(num => num*2)

// Mezcla de uso del for con array
//array.forEach((indica la vuelta <a>, devuelve el valor de la lista <b>) => {
//  console.log(`${a}: ${b}`)
//})
array.forEach((elemento, indice) => {
    console.log(`${indice + 1}: ${elemento}`);
});