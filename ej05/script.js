// ej5/script.js
const nota = parseFloat(prompt("Ingrese la nota del aprendiz (0.0 a 5.0):"));

//Validar rango primero 
if (isNaN(nota) || nota < 0 || nota > 5) {
    console.log("Nota inválida");
} else {
    let desempeño = "";

    // oredenado  de mayor a menor
    if (nota >= 4.6) {
        desempeño = "Superior";
    } else if (nota >= 4.0) {
        desempeño = "Alto";
    } else if (nota >= 3.0) {
        desempeño = "Básico";
    } else {
        desempeño = "Bajo";
    }

    const estado = nota >= 3.0 ? "APRUEBA" : "NO APRUEBA";
    console.log(`Desempeño ${desempeño} - ${estado}`);
}