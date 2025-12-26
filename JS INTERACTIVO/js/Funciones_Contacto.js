import {getDelegaciones, buscarPorEstado, buscarPorEstadoDelegacion} from './Estructuras/Sucursales.js'
import { getTotalArticulos } from './Funciones_Carrito.js'


function getEstado(){return document.getElementById("estado").value; }
function getDelegacion(){return document.getElementById("delegacion").value;}


function mostrarDivDelegacion(){
    let divContener = document.getElementById("divDelegacion");
    const estado = getEstado();

    if(estado == "CDMX" || estado == "EDOMEX" || estado == "QRO"){
        divContener.style.display = "block";
    } else {
        divContener.style.display = "none";
    }
}


function cargarDelegaciones(){
    const estado = getEstado();
    const selectDestino = document.getElementById("delegacion");
    selectDestino.innerHTML=`<option value="" selected> Selecciona un estado</option>`;

    const listaDelegaciones = getDelegaciones(estado)

    listaDelegaciones.forEach(d => {
        const option = document.createElement("option");
        option.value = d.idDelegacion;
        option.text = d.nombre;
        selectDestino.appendChild(option);
        
    });
}


function validarBusqueda(){
    const estado = getEstado();     // Obligatorio para la búsqueda
    const delegacion = getDelegacion()  // Opcional -> Solo si va a ser algo específico

    // Si el valor de un select es != 0 -> existe, en caso contrario, undefined o null
    if(!estado){
        Swal.fire({
            icon: "error",
            title: "Busqueda incorrecta",
            text: "Debes seleccionar un estado",
        });
        return;
    } else {
        if(!delegacion){
            const resultado = buscarPorEstado(estado);
            cargarTable(resultado);
            return;
        }
        const resultado = buscarPorEstadoDelegacion(estado, delegacion);
        cargarTable(resultado);
    }
}


function cargarTable(lista){
    const tbodyDestino = document.getElementById("tbody-sucursales");
    tbodyDestino.innerHTML = "";

    if(lista.length == 0){
        tbodyDestino.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No hubo sucursales</td>
            </tr>
        `
    }

    // s -> sucursal encontrada
    // index -> posición del arreglo
    lista.forEach((s, index) => {
        tbodyDestino.innerHTML += `
            <tr class="align-middle">
                <th scope="row" class="text-center">${index + 1}</th>
                <th scope="row">${s.estado}</th>
                <th scope="row">${s.delegacion} (${s.abreviatura})</th>
                <th scope="row">${s.ubicacion}</th>
                <th scope="row">${s.diasLaborales}<br> ${s.horasLaborales}
                </th>
                <th scope="row" class="text-center">
                    <img src="/imagenes/acciones/contacto.png" width="32px" 
                    style="cursor:pointer;"
                    onclick='abrirModal(${JSON.stringify(s)})'>
                </th>
            </tr>
        `
    });
}


window.abrirModal = function(sucursal){
    document.getElementById("nombreSucursal").textContent = "Sucursal " + sucursal.estado;
    document.getElementById("spanTelefono").textContent = sucursal.telefono;
    document.getElementById("spanCorreo").textContent = sucursal.correo;

    const modal = new bootstrap.Modal(document.getElementById("modalContacto"));
    modal.show();
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("estado").addEventListener("change", ()=>{
        mostrarDivDelegacion();
        cargarDelegaciones();
    });
    document.getElementById("btn-buscar").addEventListener("click", validarBusqueda);

    const spanCarrito = document.getElementById("spanCarrito");
    if(spanCarrito){
        spanCarrito.textContent = getTotalArticulos();
    }
});
