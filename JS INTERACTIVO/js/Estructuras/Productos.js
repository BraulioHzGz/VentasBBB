let producto = {
    nombre: "",         // String
    modelo: "",         // String
    precio: 0.0,        // Float
    cantidad: 0,        // Int
    descuento: 0,       // Int
    estrellas: 0,       // Int
    esNuevo: false,     // Bool
    extra: 0.0          // Float
};


// Lista de productos de 'Electrónica'
let productosElectronica = [
    {nombre: "Producto 1", modelo: "Modelo EX-001", precio: 100.0, cantidad: 10, descuento: 0, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 2", modelo: "Modelo EX-002", precio: 175.0, cantidad: 3, descuento: 30, estrellas: 1, esNuevo: true, extra: 0.0},
    {nombre: "Producto 3", modelo: "Modelo EX-003", precio: 109.99, cantidad: 5, descuento: 10, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 4", modelo: "Modelo EX-004", precio: 349.99, cantidad: 8, descuento: 5, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 5", modelo: "Modelo EX-005", precio: 580.0, cantidad: 0, descuento: 10, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 6", modelo: "Modelo EX-006", precio: 1199.99, cantidad: 2, descuento: 0, estrellas: 3, esNuevo: true, extra: 0.0},
    {nombre: "Producto 7", modelo: "Modelo EX-007", precio: 2499.99, cantidad: 15, descuento: 0, estrellas: 2, esNuevo: false, extra: 0.0},
    {nombre: "Producto 8", modelo: "Modelo EX-008", precio: 3500.0, cantidad: 20, descuento: 20, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 9", modelo: "Modelo EX-009", precio: 4000.0, cantidad: 3, descuento: 20, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 10", modelo: "Modelo EX-010", precio: 4499.99, cantidad: 4, descuento: 50, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 11", modelo: "Modelo EX-011", precio: 2250.50, cantidad: 1, descuento: 10, estrellas: 1, esNuevo: false, extra: 0.0},
    {nombre: "Producto 12", modelo: "Modelo EX-012", precio: 8850.0, cantidad: 30, descuento: 15, estrellas: 3, esNuevo: true, extra: 0.0},
    {nombre: "Producto 13", modelo: "Modelo EX-013", precio: 6249.99, cantidad: 8, descuento: 0, estrellas: 2, esNuevo: false, extra: 0.0},
    {nombre: "Producto 14", modelo: "Modelo EX-014", precio: 10000.0, cantidad: 0, descuento: 0, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 15", modelo: "Modelo EX-015", precio: 9009.0, cantidad: 9, descuento: 10, estrellas: 4, esNuevo: false, extra: 0.0}
];


// Lista de productos de 'Moda'
let productosModa = [
    {nombre: "Producto 1", modelo: "Modelo Mo-001", precio: 350.0, cantidad: 15, descuento: 0, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 2", modelo: "Modelo Mo-002", precio: 799.99, cantidad: 12, descuento: 0, estrellas: 4, esNuevo: true, extra: 0.0},
    {nombre: "Producto 3", modelo: "Modelo Mo-003", precio: 2499.99, cantidad: 7, descuento: 0, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 4", modelo: "Modelo Mo-004", precio: 5000.0, cantidad: 5, descuento: 0, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 5", modelo: "Modelo Mo-005", precio: 15000.0, cantidad: 2, descuento: 10, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 6", modelo: "Modelo Mo-006", precio: 17000.99, cantidad: 2, descuento: 20, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 7", modelo: "Modelo Mo-007", precio: 4499.99, cantidad: 8, descuento: 50, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 8", modelo: "Modelo Mo-008", precio: 800.0, cantidad: 3, descuento: 5, estrellas: 1, esNuevo: false, extra: 0.0},
    {nombre: "Producto 9", modelo: "Modelo Mo-009", precio: 7299.99, cantidad: 1, descuento: 15, estrellas: 2, esNuevo: false, extra: 0.0},
    {nombre: "Producto 10", modelo: "Modelo Mo-010", precio: 735.0, cantidad: 1, descuento: 25, estrellas: 2, esNuevo: false, extra: 0.0},
    {nombre: "Producto 11", modelo: "Modelo Mo-011", precio: 2000.0, cantidad: 9, descuento: 35, estrellas: 3, esNuevo: true, extra: 0.0},
    {nombre: "Producto 12", modelo: "Modelo Mo-012", precio: 25000.0, cantidad: 13, descuento: 10, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 13", modelo: "Modelo Mo-013", precio: 9499.99, cantidad: 5, descuento: 25, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 14", modelo: "Modelo Mo-014", precio: 120.0, cantidad: 0, descuento: 0, estrellas: 1, esNuevo: false, extra: 0.0},
    {nombre: "Producto 15", modelo: "Modelo Mo-015", precio: 6700.0, cantidad: 0, descuento: 0, estrellas: 3, esNuevo: true, extra: 0.0}
];


// Lista de productos de 'Hogar'
let productosHogar = [
    {nombre: "Producto 1", modelo: "Modelo Ho-001", precio: 400.0, cantidad: 3, descuento: 0, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 2", modelo: "Modelo Ho-002", precio: 200.0, cantidad: 20, descuento: 20, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 3", modelo: "Modelo Ho-003", precio: 1500.0, cantidad: 15, descuento: 30, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 4", modelo: "Modelo Ho-004", precio: 3800.0, cantidad: 14, descuento: 10, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 5", modelo: "Modelo Ho-005", precio: 5000.0, cantidad: 7, descuento: 5, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 6", modelo: "Modelo Ho-006", precio: 2000.99, cantidad: 1, descuento: 45, estrellas: 2, esNuevo: false, extra: 0.0},
    {nombre: "Producto 7", modelo: "Modelo Ho-007", precio: 8499.99, cantidad: 8, descuento: 30, estrellas: 1, esNuevo: false, extra: 0.0},
    {nombre: "Producto 8", modelo: "Modelo Ho-008", precio: 7499.99, cantidad: 7, descuento: 10, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 9", modelo: "Modelo Ho-009", precio: 1000.0, cantidad: 3, descuento: 15, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 10", modelo: "Modelo Ho-010", precio: 2500.0, cantidad: 3, descuento: 20, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 11", modelo: "Modelo Ho-011", precio: 6000.0, cantidad: 6, descuento: 35, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 12", modelo: "Modelo Ho-012", precio: 1200.0, cantidad: 17, descuento: 50, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 13", modelo: "Modelo Ho-013", precio: 1200.0, cantidad: 25, descuento: 50, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 14", modelo: "Modelo Ho-014", precio: 9999.99, cantidad: 1, descuento: 10, estrellas: 1, esNuevo: false, extra: 0.0},
    {nombre: "Producto 15", modelo: "Modelo Ho-015", precio: 10000.0, cantidad: 0, descuento: 0, estrellas: 5, esNuevo: false, extra: 0.0}
];


// Lista de productos de 'Deporte'
let productosDeporte = [
    {nombre: "Producto 1", modelo: "Modelo Dp-001", precio: 350.0, cantidad: 9, descuento: 0, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 2", modelo: "Modelo Dp-002", precio: 999.99, cantidad: 11, descuento: 10, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 3", modelo: "Modelo Dp-003", precio: 2500.0, cantidad: 15, descuento: 15, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 4", modelo: "Modelo Dp-004", precio: 5000.0, cantidad: 10, descuento: 20, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 5", modelo: "Modelo Dp-005", precio: 4500.0, cantidad: 24, descuento: 25, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 6", modelo: "Modelo Dp-006", precio: 875.0, cantidad: 8, descuento: 0, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 7", modelo: "Modelo Dp-007", precio: 6000.0, cantidad: 2, descuento: 0, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 8", modelo: "Modelo Dp-008", precio: 4999.99, cantidad: 1, descuento: 15, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 9", modelo: "Modelo Dp-009", precio: 1250.0, cantidad: 20, descuento: 0, estrellas: 3, esNuevo: false, extra: 0.0},
    {nombre: "Producto 10", modelo: "Modelo Dp-010", precio: 2700.0, cantidad: 15, descuento: 10, estrellas: 1, esNuevo: true, extra: 0.0},
    {nombre: "Producto 11", modelo: "Modelo Dp-011", precio: 7000.0, cantidad: 5, descuento: 10, estrellas: 2, esNuevo: false, extra: 0.0},
    {nombre: "Producto 12", modelo: "Modelo Dp-012", precio: 3200.0, cantidad: 7, descuento: 35, estrellas: 5, esNuevo: false, extra: 0.0},
    {nombre: "Producto 13", modelo: "Modelo Dp-013", precio: 4125.0, cantidad: 34, descuento: 0, estrellas: 4, esNuevo: true, extra: 0.0},
    {nombre: "Producto 14", modelo: "Modelo Dp-014", precio: 3000.0, cantidad: 25, descuento: 60, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 15", modelo: "Modelo Dp-015", precio: 359.99, cantidad: 10, descuento: 0, estrellas: 3, esNuevo: false, extra: 0.0}
];


// Lista de productos de 'Regalos'
let productosRegalo = [
    {nombre: "Producto 1", modelo: "Modelo Ro-001", precio: 500.0, cantidad: 21, descuento: 0, estrellas: 4, esNuevo: true, extra: 0.0},
    {nombre: "Producto 2", modelo: "Modelo Ro-002", precio: 500.0, cantidad: 21, descuento: 15, estrellas: 4, esNuevo: true, extra: 0.0},
    {nombre: "Producto 3", modelo: "Modelo Ro-003", precio: 500.0, cantidad: 1, descuento: 0, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 4", modelo: "Modelo Ro-004", precio: 500.0, cantidad: 21, descuento: 10, estrellas: 3, esNuevo: true, extra: 0.0},
    {nombre: "Producto 5", modelo: "Modelo Ro-005", precio: 500.0, cantidad: 21, descuento: 0, estrellas: 3, esNuevo: true, extra: 0.0},
    {nombre: "Producto 6", modelo: "Modelo Ro-006", precio: 1500.0, cantidad: 15, descuento: 0, estrellas: 3, esNuevo: true, extra: 0.0},
    {nombre: "Producto 7", modelo: "Modelo Ro-007", precio: 1500.0, cantidad: 15, descuento: 0, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 8", modelo: "Modelo Ro-008", precio: 1500.0, cantidad: 15, descuento: 20, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 9", modelo: "Modelo Ro-009", precio: 2700.0, cantidad: 15, descuento: 0, estrellas: 5, esNuevo: true, extra: 0.0},
    {nombre: "Producto 10", modelo: "Modelo Ro-010", precio: 2700.0, cantidad: 2, descuento: 0, estrellas: 2, esNuevo: false, extra: 0.0},
    {nombre: "Producto 11", modelo: "Modelo Ro-011", precio: 2700.0, cantidad: 21, descuento: 30, estrellas: 2, esNuevo: true, extra: 0.0},
    {nombre: "Producto 12", modelo: "Modelo Ro-012", precio: 3800.0, cantidad: 21, descuento: 0, estrellas: 2, esNuevo: true, extra: 0.0},
    {nombre: "Producto 13", modelo: "Modelo Ro-013", precio: 3800.0, cantidad: 4, descuento: 0, estrellas: 4, esNuevo: false, extra: 0.0},
    {nombre: "Producto 14", modelo: "Modelo Ro-014", precio: 3800.0, cantidad: 7, descuento: 0, estrellas: 4, esNuevo: true, extra: 0.0},
    {nombre: "Producto 15", modelo: "Modelo Ro-015", precio: 5000.0, cantidad: 7, descuento: 60, estrellas: 1, esNuevo: true, extra: 0.0}
];