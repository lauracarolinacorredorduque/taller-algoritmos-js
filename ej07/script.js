// ej07/script.js
const numeroDia = parseInt(prompt("Ingrese un número del 1 al 7:"), 10);
let nombreDia = "";
let tipoDia = "";

// Primer switch: nombre del día
switch (numeroDia) {
  case 1: nombreDia = "Lunes"; break;
  case 2: nombreDia = "Martes"; break;
  case 3: nombreDia = "Miércoles"; break;
  case 4: nombreDia = "Jueves"; break;
  case 5: nombreDia = "Viernes"; break;
  case 6: nombreDia = "Sábado"; break;
  case 7: nombreDia = "Domingo"; break;
  default: nombreDia = null;
}

// Segundo switch: tipo de día agrupado
switch (numeroDia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    tipoDia = "Día de formación";
    break;
  case 6:
  case 7:
    tipoDia = "Fin de semana";
    break;
  default:
    tipoDia = null;
}

if (nombreDia === null) {
  console.log("Número de día inválido");
} else {
  console.log(`${nombreDia} - ${tipoDia}`);
}