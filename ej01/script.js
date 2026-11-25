// ej01/ script.js
const nombre = "Laura";
const peso = 62; // en kg
const estatura = 1.65; // en metros

// Calculo del IMC usando el operador de potencia (**)
const imc = peso / (estatura ** 2);

console.log(`${nombre}, tu IMC es ${imc.toFixed(2)}`);