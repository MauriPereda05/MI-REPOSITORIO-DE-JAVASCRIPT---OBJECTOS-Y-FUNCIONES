let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
let operacion = prompt("Ingrese la operacion que necesite realizar: ");
let resultado;

if(operacion === "+"){
    resultado = numero1 + numero2;
} else if(operacion === "-"){
    (resultado = numero1 - numero2);
} else if(operacion === "*"){
    resultado = numero1 * numero2;
} else if (operacion === "/"){
    resultado = numero1 / numero2;
} else if (operacion === "%"){
    resultado = numero1 % numero2;
} else{
    resultado = "La operacion no es valida"
}

console.log("El resultado es: " + resultado);