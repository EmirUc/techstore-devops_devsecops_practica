const test = require('node:test');
const assert = require('node:assert/strict');

const { calcularTotal } = require('./tienda');

// Prueba 1: Comprar dos audifonos
test('Compra de dos audifonos', () => {
    assert.strictEqual(calcularTotal('audifonos', 2), 2000);
});

// Prueba 2: Comprar tres mouse
test('Compra de tres mouse', () => {
    assert.strictEqual(calcularTotal('mouse', 3), 1050);
});

// Prueba 3: Producto inexistente
test('Rechazar producto inexistente', () => {
    assert.throws(
        () => calcularTotal('tablet', 1),
        /Producto no encontrado/
    );
});
