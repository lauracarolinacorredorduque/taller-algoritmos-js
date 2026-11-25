// ej04/script.js
const numero = parseInt(prompt("Ingrese un numero entero:"), 10);

if (isNaN(numero)) {
    console.log("Por favor, ingrese un numero entero valido.");
} else {
    // Determinar signo con if / else if / else
        let signo = "";
        if (numero > 0) {
            signo ="Positivo"
            } else if (numero < 0) {
                signo = "Negativo";
            } else {
                signo = "Cero";
            }

            // Determinar paridad con operador ternario
            const paridad = (numero % 2 === 0) ? "Par" : "Impar";

            console.log(`El numero ${numero} es ${signo} y ${paridad}.`);
        }
        
