const prompt = require("prompt-sync")();
let rol = ""

while(rol !== "salir" && rol !== "Salir" && rol !== "3" ){ 
    rol = prompt("Cual es tu rol?: ");
    switch(rol){
        case "admin":
            console.log("Acceso total");
            break
        case "editor":
            console.log("Acceso levemente restringido");
            break
        case "salir":
            console.log("Programa finalizado");
            break
        default:
            console.log("Usuario",rol,"invalido, reintente.");
            // Aquí no cambiamos 'continuar', por lo que pedirá el dato de nuevo
    }
}