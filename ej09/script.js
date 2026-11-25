// ej09/script.js
const totalAprendices = parseInt(prompt("¿Cuántos aprendices tiene la ficha?"), 10);

if (isNaN(totalAprendices) || totalAprendices <= 0) {
  console.log("Cantidad de aprendices inválida.");
} else {
  let sumaNotas = 0;
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 1; i <= totalAprendices; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota del aprendiz #${i} (0.0 a 5.0):`));

    // Validar rango: si es inválida, retroceder el índice (i--) para repetir
    if (isNaN(nota) || nota < 0 || nota > 5) {
      alert("Nota inválida. Debe estar entre 0.0 y 5.0. Intente de nuevo.");
      i--;
      continue;
    }

    sumaNotas += nota;

    if (nota >= 3.0) {
      aprobados++;
    } else {
      reprobados++;
    }
  }

  const promedio = sumaNotas / totalAprendices;
  console.log(`Promedio: ${promedio.toFixed(2)} | Aprobados: ${aprobados} | Reprobados: ${reprobados}`);
}