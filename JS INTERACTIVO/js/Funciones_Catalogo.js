import { productos } from './Estructuras/Productos.js'
import { getTotalArticulos, agregarProducto } from './Funciones_Carrito.js'


export function mostrarProducto(categoria){
    const contenedor = document.getElementById("contenedorProductos");
    contenedor.innerHTML = '';

    // Electrónica != ELECTRÓNICA != Electrónica  != electrónica
    const categoriaNormalizada = categoria.toLowerCase().trim();
    const productosFiltrados = 
        productos.filter(p => p.categoria.toLowerCase().trim() === categoriaNormalizada);
    
    productosFiltrados.forEach(p => {
        const card = document.createElement('div');
        card.classList.add('col');

        // data-aos="flip-up"
        card.innerHTML = `
            <div class="card border-2 shadow-sm p-4 h-100 text-center position-relative" data-aos="flip-up">
                <button class="btn btn-sm position-absolute top-0 end-0 m-2 p-0 bg-transparent border-0 info-btn">
                    <img src="/imagenes/acciones/info.png" width="28" height="28" class="rounded-circle shadow-sm">
                </button>
                <i class="fa-solid fa-box-open fa-3x bg-cartoon-box mb-3"></i>
                <h5 class="fw-bold">${p.nombre}</h5>
                <p class="text-muted mb-1">Modelo: ${p.modelo}</p>
                <p class="fw-semibold text-success">$${p.precio.toFixed(2)} MXN</p>
                <div class="d-flex justify-content-center align-items-center">
                    <p>${p.estrellas} estrellas</p>
                </div>
            </div>
        `;

        card.querySelector('.info-btn').addEventListener("click", () => { modal(p); });

        contenedor.appendChild(card);
    });

    if(typeof AOS !== 'undefined'){
        AOS.refreshHard();
    }
}


function modal(producto){
    const modal = document.getElementById("modalProducto");
    const titulo = modal.querySelector('.modal-body h5.fw-semibold');
    const nombreProducto = modal.querySelector('.modal-body h5.fw-bold');
    const modelo = modal.querySelector('.modal-body p.text-muted');
    const costo = modal.querySelector('.modal-body p span.text-success');
    const totalTienda = modal.querySelector('.modal-body p span.text-primary');
    const divBoton = modal.querySelector('#contenedorImagen');
    const colorSelect = modal.querySelector('#colorSelect');

    if(titulo)titulo.textContent = producto.nombre;
    if(nombreProducto)nombreProducto.textContent = producto.nombre;
    if(modelo)modelo.textContent = producto.modelo;
    if(costo)costo.textContent = `$${producto.precio.toFixed(2)} MXN`;
    if(totalTienda)totalTienda.textContent = producto.cantidad;

    divBoton.innerHTML = `
        <label for="quantity g-5">Añadir al carrito:</label>
        <img src="/imagenes/acciones/agregar.png" alt="Añadir al carrito" width="22px" 
            height="22px" class="me-5 btn-add-carrito" style="cursor: pointer;">
    `
    const imagenAccionCarrito = divBoton.querySelector('.btn-add-carrito');


    async function handlerAgregarProducto(){
        imagenAccionCarrito.removeEventListener('click', handlerAgregarProducto);

        divBoton.innerHTML = `
            <label for="quantity g-5">Procesando:</label>
            <img src="/imagenes/gifs/procesando_2.gif" alt="Procesando" width="22px" 
                height="22px" class="me-5 btn-add-carrito" style="cursor: wait;">
        `;

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Variables temporales sin uso
        const idProducto = producto.id;
        const cantidad = 1;
        const color = colorSelect.value;
        agregarProducto(idProducto, cantidad, color);

        alert("Producto agregado al carrito");
        divBoton.innerHTML = `
            <label for="quantity g-5">Producto agregado</label>
            <img src="/imagenes/acciones/Ok.png" alt="Ok" width="22px" 
                height="22px" class="me-5 btn-add-carrito" style="cursor: default;">
        `;

    }

    imagenAccionCarrito.addEventListener('click', handlerAgregarProducto);
    const modalProducto = new bootstrap.Modal(modal);
    modalProducto.show();
}


document.addEventListener("DOMContentLoaded", () => {
    const color = document.getElementById("colorSelect"); 
    const icono = document.getElementById("iconoProducto");

    if(color && icono){
        color.addEventListener("change", () => {
            const hexColor = color.value;
            icono.style.color = `#${hexColor}`;
        })   
    }

    // ^=  ->  No se llama así, pero contiene en su nombre x cadena
    const cbdescuento = document.querySelectorAll('input[name^="desc"]');
    cbdescuento.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            if(this.checked){   // true o false
                cbdescuento.forEach(otro => {
                    if(this !== otro){
                        otro.checked = false;
                    }
                });
            }
        });
    });


    function aplicarFiltros(){
        const categoriaActivaElement = document.querySelector('.navbar-categorias .nav-link.active');
        const categoriaActiva = categoriaActivaElement ? 
                categoriaActivaElement.dataset.categoria : 'Electrónica';

        const filtroEstrellas = document.getElementById("filtroEstrellas").value;
        const descuentoSeleccionado = Array.from(cbdescuento).find(cb => cb.checked);
        const rangoPrecio = document.getElementById("rangoPrecio").value;

        const estrellasMinimas = parseInt(filtroEstrellas, 10);
        const precioMax = parseInt(rangoPrecio, 10);

        const filtrosActivos = estrellasMinimas > 0 || descuentoSeleccionado || precioMax > 0;
        if(!filtrosActivos){
            alert("Debes seleccionar un filtro");
            return;
        }

        //productos.filter(p => p.categoria.toLowerCase().trim() === categoriaNormalizada);
        let productosFiltrados = productos.filter
            (p => p.categoria.toLowerCase().trim() === categoriaActiva.toLowerCase().trim());

        // Construcción de todos los filtros

        // Filtrado por estrellas
        if(estrellasMinimas > 0){
            productosFiltrados = productosFiltrados.filter(p => p.estrellas >= estrellasMinimas);
        }

        // Filtrado por descuentos
        if(descuentoSeleccionado){
            let descMin = 0;
            let descMax = 0;
            const totalDesc = descuentoSeleccionado.id;

            if(totalDesc == 'desc1'){
                descMin = 5; descMax = 10;
            } else if(totalDesc == 'desc2'){
                descMin = 10; descMax = 25;
            } else if(totalDesc == 'desc3'){
                descMin = 30; descMax = 60;
            }

            productosFiltrados = productosFiltrados.filter
                (p => p.descuento >= descMin && p.descuento <= descMax)
        }

        // Filtro por precio
        if(precioMax > 0){
            productosFiltrados = productosFiltrados.filter(p => p.precio <= precioMax);
        }


        // Una vez filtrado todo, mostramos los cards
        const contenedor = document.getElementById("contenedorProductos");
        contenedor.innerHTML = '';
        productosFiltrados.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('col');
            card.innerHTML = `
                <div class="card border-2 shadow-sm p-4 h-100 text-center position-relative" data-aos="flip-up">
                    <button class="btn btn-sm position-absolute top-0 end-0 m-2 p-0 bg-transparent border-0 info-btn">
                        <img src="/imagenes/acciones/info.png" width="28" height="28" class="rounded-circle shadow-sm">
                    </button>
                    <i class="fa-solid fa-box-open fa-3x bg-cartoon-box mb-3"></i>
                    <h5 class="fw-bold">${p.nombre}</h5>
                    <p class="text-muted mb-1">Modelo: ${p.modelo}</p>
                    <p class="fw-semibold text-success">$${p.precio.toFixed(2)} MXN</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <p>${p.estrellas} estrellas</p>
                    </div>
                </div>
            `;

            card.querySelector('.info-btn').addEventListener("click", () => { modal(p); });

            contenedor.appendChild(card);
        });

        if(typeof AOS !== 'undefined'){
            AOS.refreshHard();
        }
    }


    function limpiarFiltros(){
        document.getElementById("filtroEstrellas").value = "0";
        const cbdescuento = document.querySelectorAll('input[name^="desc"]');
        cbdescuento.forEach(cb => {
            cb.checked = false;
        });
        const precioSpan = document.getElementById("valorPrecio");
        if(precioSpan){ precioSpan.textContent = '$0 MXN'; }
        const categoriaActivaElement = document.querySelector('.navbar-categorias .nav-link.active');
        mostrarProducto(categoriaActivaElement.trim());
    }

    const botonFiltro = document.getElementById("btn-filtrar");
    if(botonFiltro){ botonFiltro.addEventListener("click", aplicarFiltros); }

    const botonLimpiar = document.getElementById("btn-limpiar");
    if(botonLimpiar){ botonLimpiar.addEventListener("click", limpiarFiltros); }

    // Para la parte del slider:
    const rangoPrecio = document.getElementById("rangoPrecio");
    const valorPrecio = document.getElementById("valorPrecio");

    if(rangoPrecio && valorPrecio){
        actualizarPrecio(rangoPrecio.value);

        rangoPrecio.addEventListener('input', function(){ actualizarPrecio(this.value); });

        function actualizarPrecio(valor){
            const valorFinal = parseInt(valor, 10);
            
            // Estructura correecta de moneda mexicana
            const formatter = new Intl.NumberFormat('es-MX', {
                style: 'currency',
                currency: 'MXN',
                maximumFractionDigits: 0
            });

            if(valorFinal >= 10000){
                valorPrecio.textContent = `${formatter.format(valorFinal)}+ MXN`;
            } else {
                valorPrecio.textContent = `${formatter.format(valorFinal)} MXN`;
            }
        }
    }

    const spanCarrito = document.getElementById("spanCarrito");
    if(spanCarrito){
        spanCarrito.textContent = getTotalArticulos();
    }
});

