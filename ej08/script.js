// ej08/script.js
const numero = parseInt(prompt("Ingrese el número para generar su tabla de multiplicar:"), 10);

if (isNaN(numero)) {
  console.log("Debe ingresar un número válido.");
} else {
  // Inicializar acumuladores antes del ciclo
  let suma = 0;
  let tabla = "";

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    suma += resultado;
    tabla += `${numero} x ${i} = ${resultado}\n`;
  }

  tabla += `Suma de resultados: ${suma}`;
  console.log(tabla);
}