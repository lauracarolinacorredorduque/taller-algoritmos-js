// ej03/script.js
const IVA = 0.19;
const producto = "Cuaderno";
const precioUnitario = 5000;
const cantidad = 3;

// Funcion auxiliar para formatear a pesos colombianos
function formatear(valor) {
    return valor.toLocaleString("es-CO" , {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    });
    }
    const subtotal = precioUnitario * cantidad;
    const valorIVA = subtotal * IVA;
    const total = subtotal + valorIVA;

    console.log(`Producto : ${producto} x ${cantidad}`);
    console.log(`Subtotal : ${formatear(subtotal)}`);
    console.log(`IVA (19%) : ${formatear(valorIVA)}`);
    console.log(`Total : ${formatear(total)}`);
