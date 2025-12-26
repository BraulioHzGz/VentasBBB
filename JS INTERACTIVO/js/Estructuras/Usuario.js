let usuario = {
    nombre: "Braulio",
    correo: "ejemplo@gmail.com",
    carrito: []
}


export function getNombreUsuario(){ return usuario.nombre; }
export function getCorreoUsuario(){ return usuario.correo }
//export function getCarritoUsuario(){ return usuario.carrito; }

// Mi primer módulo

const KEY_CARRITO = "carrito";

export function getCarritoUsuario(){
    const carritoJSON = localStorage.getItem(KEY_CARRITO);  // Guardando en Local Storage
    return carritoJSON ? JSON.parse(carritoJSON) : [];      // Retornando lo guardado
}


export function guardarCarrito(carrito){

    // Cada que se agregue un elemento, actualizamos el localStorage
    localStorage.setItem(KEY_CARRITO, JSON.stringify(carrito)); 
}
