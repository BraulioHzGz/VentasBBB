# VENTAS BBB
<h1> Curso express de programación interactiva con js y bootstrap </h1>

Aquí irán las distintas <strong>actividades</strong> y <strong> ejercicos de casa </strong> que tendrán que modificar o cambiar según lo visto en clase o acciones que gusten complemtar.

<h3> Contenido del proyecto: </h3>
<ul>Archivos HTML con diseño responsivo usando <b>Bootstrap 5</b> y diseños CSS propios para una mejor estética</ul>
<ul>Archivos reutilizables a nivel HTML y código JavaScript para mejorar la funcionalidad de la página</ul>
<ul>Imágenes y gifs que permiten visualizar mejor la página o realizar distintas acciones con ellas</ul>
<ul>Funciones y archivo js, algunos inicializados con valores y otros no (mismos que se deberán ir trabajando)</ul>

<h3>Antecedentes que deben tener</h3>
<li>Manejo básico de <b>HTML 5</b> y <b>CSS 3</b> y conocimiento básico de <b>Bootstrap 5</b></li>
<li>Fundamentos de programación básicos</li>
<li>Definición de javascript como lenguaje de programación y su objetivo en el desarrollo web</li>
<li>Conocimiento teórico de frameworks actuales basados en javascript para una mejor aplicación de la tienda</li>
<li>Sintaxis básica de javascript: declarar variables, mostrar mensajes, condicionales, ciclos, arreglos, estructuras e inicialización de valores</li>
<li>Manejo de funciones sin parámetros, con parámetros, funciones anónimas y funciones flecha</li>
<li>Conocimiento teórico del DOM (Document Object Model)</li>


# Retos que se tendrán que cumplir en cada sección</h1>
<h1>Sección de opinión</h1>
<li>Si se selecciona el botón de Limpiar aunque no haya nada ingresado aún, cumple su función, pero primero debería validar que haya algo seleccionado</li>
<li>Cuando se guarda el cuestionario, el alert debería mostrar que categoría seleccionó el usuario</li>
<li>Se debería preguntar al usuario si realmente quiere limpiar todos los datos al darle click al botón de "Limpiar" si solo sí, hay algo seleccionado ¿no crees?</li>


<h1>Sección de sucursales</h1>
<li>Al cargar la tabla, aparece con una sucursal por default sin ni siquiera haber seleccionado un estado, lo cuál es erróneo. Se debe corregir eso para la tabla aparezca hasta que el usuario le de click al botón de buscar una vez que se hayan validado todos los parámetros.</li>
<li>Al buscar por delegación y estado no hace ese cambio, como si el filtrado no hubiera funcionado. Se debe corregir el filtrado</li>
<li>Cuando se busca por estado y delegación, hay un bug que no permite mostrar la delegación ni su abreviatura, se debe corregir ese bug en la página</li>
<li>Además de mostrar en la tabla "No hay sucursales disponibles" al no haber coincidencia, se debería mostrar una alert para usuarios que son despistados y no leen</li>


<h1>Sección de productos</h1>
<li>Cuando un producto tiene 1 estrella, por alguna razón muestra en plural en vez de singular, esto no debe pasar y se tiene que corregir</li>
<li>Debajo debe la imagen de producto debe aparecer <i><strong>"Producto Real"</strong></i> en vez del nombre del producto, algo que debe corregirse por que así lo pidió el usuario</li>
<li>¿Para que será la variable <i>esNuevo</i> de los productos? Debe mostrarse en el modal... ¿cómo pudimos olvidarla?</li>
<li>Si un producto tiene descuento, tal vez deba mostrarse en el modal ¿no crees? Así no engañamos al cliente y no nos cae la voladora de PROFECO</li>
<li>Si después de aplicar los filtros, no hay algún producto que cumpla con esos parámetros, debería mostrar que no hubo coincidencias ¿cierto?</li>
<li>Como se comentó, las alerts de ese tipo no deberían mostrarse así, esas son solo para debug, ya que arruinan la experiencia del usuario. Se deben corregir y hacerlas más alusivas con <strong>sweet alert</strong></li>
<li>Antes de limpiar el filtro, se debería preguntar al usuario sobre esa acción en caso de un dedazo erróneo</li>
<li>Por alguna razón, al limpiar, los filtros si se limpian correctamente, pero no "refresca" los productos. Soluciona ese bug en la página para evitar malas experiencias de usuario</li>


<h1>Sección de carrito</h1>
<li>Cuando se agrega un producto con color, se debería mostrar el producto con el color ¿no crees?</li>
<li>El botón de eliminar no hace nada aún, implementar la función o funciones necesarias y modificaciones necesarias para eliminar producto del carrito <i>(pista: investigar el uso de la función splice())</i></li>
<li>Los productos que tienen un descuento, no muestran de cuánto es y tampoco se ve reflejado el descuento en el subtotal, se debe solucionar eso</li>
<li>Al eliminar productos con el botón de menos, acepta valores negativos... ¿eso debería pasar?</li>
<li>Antes de eliminar el producto o los productos, creo se debería pregunta al usuario con un alert ¿no crees?</li>
<li>Cuando se eliminan todos los productos, la tabla debería mostrar que no hay productos agregar al carrito</li>
<li>Cuando se ingresa un cupón, se pueden seguir agregando más cupones y genera cierto bug en la aplicación, ¿eso es correcto?</li>
<li>El botón de "finalizar compra" debería estar inhabilitado si no hay artículos, o en su caso, indicar error</li>
