const prompt = require("prompt-sync")()
const print = function(...text){
    if(text === undefined){
        text = ""
    }
    console.log(...text)
}

function validate(){
    let numero;
    while(true){
        numero = Number(prompt("Ingrese un numero: "))
        if(!isNaN(numero)){
            return numero
        } else {
            print("No es un numero, ingresalo nuevamente")
        }
    }
}

function suma(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return "Solo ingresa numeros"    
    }
    return num1 + num2;
}

function resta(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return "Solo ingresa numeros"    
    }
    return num1 - num2;
}

function mult(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return "Solo ingresa numeros"    
    }
    return num1 * num2;
}

function div(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return "Solo ingresa numeros"    
    }
    if(num2 == 0){
        return "No puedes usar 0 en el divisor"
    }
    return num1 / num2;
}

function mod(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return "Solo ingresa numeros"    
    }
    if(num2 == 0){
        return "No puedes usar 0 en el divisor"
    }
    return num1 % num2;
}

function calc(opcion){
    opcion = 1;
    while(opcion <= "5" && opcion >= 1 && !isNaN(opcion)){
        print()
        print("### Calculadora ###")
        print("1. Sumar")
        print("2. Restar")
        print("3. Multiplicar")
        print("4. Dividir")
        print("5. Modulo")
        print("")
        print("Cualquier otro valor: Salir")
        print("")
        opcion = prompt("Ingrese una opcion: ")
        switch(opcion){
            case "1":
                print()
                numero1 = validate();
                numero2 = validate();
                resultado = suma(numero1,numero2)
                print()
                print(`El resultado es ${resultado}`)
                break
            case "2":
                print()
                numero1 = validate();
                numero2 = validate();
                print()
                resultado = resta(numero1,numero2)
                print(`El resultado es ${resultado}`)
                break
            case "3":
                print()
                numero1 = validate();
                numero2 = validate();
                print()
                resultado = mult(numero1,numero2)
                print(`El resultado es ${resultado}`)
                break
            case "4":
                print()
                numero1 = validate();
                numero2 = validate();
                print()
                resultado = div(numero1,numero2)
                print(`El resultado es ${resultado}`)
                break    
            case "5":
                print()
                numero1 = validate();
                numero2 = validate();
                print()
                resultado = mod(numero1,numero2)
                print(`El resultado es ${resultado}`)
                break                                     
        }
    }
    print()
    print ("Hasta pronto")
}
calc()