// ej10/script.js
// Contadores
let cantPares = 0;
let cantImpares = 0;
let multiplos3y5 = 0;

// Acumuladores
let sumaPares = 0;
let sumaImpares = 0;

// Un solo ciclo para recorrer del 1 al 100
for (let n = 1; n <= 100; n++) {
  if (n % 2 === 0) {
    cantPares++;
    sumaPares += n;
  } else {
    cantImpares++;
    sumaImpares += n;
  }

  // Múltiplo de 3 y 5 a la vez (múltiplo de 15)
  if (n % 15 === 0) {
    multiplos3y5++;
  }
}

console.log(`Pares: ${cantPares} (suma ${sumaPares})`);
console.log(`Impares: ${cantImpares} (suma ${sumaImpares})`);
console.log(`Múltiplos de 3 y 5: ${multiplos3y5}`);