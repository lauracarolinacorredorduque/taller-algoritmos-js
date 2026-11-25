// ej06/script.js
const valorCompra = 320000;
const esMiembro = true;
const COSTO_ENVIO = 12000;

function formatear(valor) {
    return valor.toLocaleString("es-CO" , {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
  });
}

// 1. Calcular porcentaje de descuento base 
let porcentajeDescuento = 0;
if (valorCompra >= 300000) {
    porcentajeDescuento = 20;
} else if (valorCompra >= 100000) {
    porcentajeDescuento = 10;
}

// 2. Sumar 5% adicional si es miembro
if (esMiembro) {
    porcentajeDescuento += 5;
}

// 3. Calcular valores monetarios
const valorDescuento = valorCompra * (porcentajeDescuento / 100);
const subtotalConDescuento = valorCompra - valorDescuento;

// 4. Calcular envío (gratis si supera $150.000)
const envio = (subtotalConDescuento > 150000) ? 0 : COSTO_ENVIO;
const totalFinal = subtotalConDescuento + envio;

console.log(`Compra: ${formatear(valorCompra)}, miembro: ${esMiembro ? "sí" : "no"}`);
console.log(`Descuento: ${porcentajeDescuento}% (-${formatear(valorDescuento)})`);
console.log(`Envío: ${formatear(envio)}`);
console.log(`Total: ${formatear(totalFinal)}`);