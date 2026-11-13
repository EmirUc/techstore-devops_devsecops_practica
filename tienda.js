// Productos disponibles en nuestra tienda
const productos = {
    audifonos: 800,
    mouse: 350
};

// Funcion para calcular el total de una compra
function calcularTotal(producto, cantidad) {

    const precio = productos[producto];

    if (precio === undefined) {
        throw new Error('Producto no encontrado');
    }

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        throw new Error('La cantidad debe ser mayor a cero');
    }

    return precio * cantidad;
}

module.exports = { calcularTotal };
