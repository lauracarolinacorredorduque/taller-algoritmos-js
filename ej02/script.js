// ej02/script.js
const entrada = prompt("Ingrese la temperatura en grados Celsius (°C):");
const celsius = parseFloat(entrada);

// Validar que no se haya cancelado y que sea un numero valido 
if (entrada === null || entrada.trim() === "" || isNaN(celsius)) {
    console.error(">Error: Debe ingredar un valor numerico valido .");
    alert("Error: Dbe ingresar un valor numerico valido.");
} else{
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 237.15;

    const resultado = `${celsius} °C = ${fahrenheit} °F = ${kelvin} K`;
    console.log(resultado);
    alert(resultado);
}
