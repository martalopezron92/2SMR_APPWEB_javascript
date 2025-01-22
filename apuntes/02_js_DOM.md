# JavaScript DOM y eventos

**JavaScript** y el **Document Object Model (DOM)** son componentes esenciales para hacer que un**a página web sea dinámica e interactiva.** El código **HTML** proporciona la estructura básica de una página web y mediante JavaScript le dotamos de interactividad. Por ejemplo, podemos usar JavaScript para seleccionar elementos HTML y modificar su contenido o estilo en respuesta a eventos del usuario.


JavaScript es un **lenguaje de programación de alto nivel** que se ejecuta en el navegador del cliente. Con JavaScript, podemos manipular elementos HTML, responder a eventos del usuario, realizar solicitudes al servidor, etc. Es fundamental para agregar interactividad y funcionalidad a las páginas web.


1\. Introducción al DOM
-----------------------

El **DOM** es una **representación en forma de árbol de la estructura de un documento HTML/XML.** Cada elemento HTML se convierte en un objeto en el DOM, lo que permite acceder, manipular y modificar los elementos y el contenido de una página web mediante JavaScript. El DOM es esencial para la manipulación dinámica de la página, como agregar o eliminar elementos, cambiar estilos y responder a eventos del usuario.

En la parte más alta del árbol del DOM de un documento HTML se encuentra el **nodo raíz `document`**, que representa el documento HTML en su totalidad. Este objeto `document` se encuentra predefinido en JavaScript y se utiliza para acceder a los elementos del DOM.L. Veamos cómo podemos seleccionar los elementos del DOM a partir del objeto `document`.

![DOM](https://www.eniun.com/wp-content/uploads/DOM.png)

**Figura 1:** DOM de un documento HTML

Ejemplo:

```
document.body.innerHTML = "Escribo algo de texto en el documento HTML";
```


Como `<body>` es un elemento del DOM, podemos acceder a él y modificar su contenido. En este caso, se selecciona el elemento `<body>` y reemplaza su contenido actual con el nuevo contenido proporcionado mediante el método `innerHTML`. El texto «Escribo algo de texto en el documento HTML» se insertará como HTML plano en el cuerpo del documento, reemplazando cualquier contenido existente.

El método `innerHTML` se puede usar en casi todos los elementos HTML para modificar su contenido.

2\. Selección de elementos del DOM
----------------------------------

La selección de elementos en el DOM es fundamental para interactuar con ellos desde JavaScript. Existen varios **métodos para seleccionar elementos** de diferentes maneras, ya sea por etiqueta, clase, id, etc.



* Método: document.getElementById()
  * Descripción: Selecciona un elemento por su id. Devuelve un único elemento. Ejemplo: document.getElementById("miId");
* Método: document.getElementsByClassName()
  * Descripción: Selecciona elementos por su clase. Devuelve una colección de elementos. Ejemplo: document.getElementsByClassName("miClase");
* Método: document.getElementsByTagName()
  * Descripción: Selecciona elementos por su etiqueta. Devuelve una colección de elementos. Ejemplo: document.getElementsByTagName("p");
* Método: document.querySelector()
  * Descripción: Selecciona el primer elemento que coincida con un selector CSS. Devuelve un único elemento. Ejemplo: document.querySelector("#miId");
* Método: document.querySelectorAll()
  * Descripción: Selecciona todos los elementos que coincidan con un selector CSS. Devuelve una colección de elementos. Ejemplo: document.querySelectorAll(".miClase");


**Tabla 1:** Métodos de selección de elementos del DOM

Ejemplo:

```
// Seleccionamos elementos por su id
var container = document.getElementById('container');
// Modificamos el contenido del div con id "container"
container.innerHTML = "<h1>Nuevo Contenido (modificado)</h1>";

// Seleccionamos elementos por su clase
var parrafos = document.getElementsByClassName('parrafo');
// Modificamos el contenido de todos los elementos con clase "parrafo"
for (var i = 0; i < parrafos.length; i++) {
  parrafos[i].innerHTML += " (modificado)";
}

// Seleccionamos elementos por su etiqueta
var listItems = document.getElementsByTagName('li');
// Modificamos el contenido de todos los elementos <li>
for (var i = 0; i < listItems.length; i++) {
  listItems[i].innerHTML += " (modificado)";
}

// Seleccionamos el primer párrafo utilizando document.querySelector()
var primerParrafo = document.querySelector('.parrafo2');
// Modificamos el contenido del primer párrafo
primerParrafo.innerHTML += " (modificado)";

// Seleccionamos todos los párrafos utilizando document.querySelectorAll()
var parrafos = document.querySelectorAll('.parrafo2');
// Modificamos el contenido de todos los párrafos
for (var i = 0; i < parrafos.length; i++) {
  parrafos[i].innerHTML += " (modificado)";
}
```


3\. Manipulación de elementos
-----------------------------

Una vez seleccionados los elementos, es posible **manipular su contenido**, estilo y otros atributos mediante JavaScript. Veamos algunos de los métodos más utilizados:



* Método: elemento.innerHTML
  * Descripción: Obtiene o establece el contenido HTML de un elemento. Ejemplo: document.getElementById("miId1").innerHTML = "Nuevo contenido";
* Método: elemento.textContent
  * Descripción: Obtiene o establece el contenido de texto de un elemento. Ejemplo: document.getElementById("miId2").textContent = "Nuevo texto";
* Método: elemento.setAttribute()
  * Descripción: Establece el valor de un atributo de un elemento. Ejemplo: document.getElementById("miId3").setAttribute("class", "miClase");
* Método: elemento.style.property
  * Descripción: Accede a las propiedades de estilo CSS de un elemento. Ejemplo: document.getElementById("miId4").style.color = "blue";
* Método: document.write()
  * Descripción: Escribe contenido en el documento HTML. Lo normal es que lo escriba a continuación del contenido existente, pero no es recomendable su uso porque puede sobreescribir todo el contenido existente. Ejemplo: document.write("¡Hola mundo!");
* Método: document.createElement()
  * Descripción: Crea un nuevo elemento HTML especificado por su etiqueta. Ejemplo: var boton = document.createElement("button");
* Método: element.appendChild()
  * Descripción: Agrega un nodo al final de la lista de hijos de un elemento. document.body.appendChild(boton);
* Método: element.createAttribute()
  * Descripción: Crea un nuevo atributo y devuelve el nuevo objeto de atributo. Ejemplo: var nuevoAtributo = document.createAttribute("class");
* Método: element.setAttributeNode()
  * Descripción: Establece el atributo especificado en el elemento. Ejemplo: nuevoAtributo.value = "miClase2";
* Método: element.removeAttribute()
  * Descripción: Elimina un atributo especificado de un elemento. Ejemplo: document.getElementById("miId6").removeAttribute("class");
* Método: element.remove()
  * Descripción: Elimina un elemento del DOM. Ejemplo: document.getElementById("miId7").remove();


**Tabla 2**: Métodos para la manipulación de elementos

Ejemplo:

```
//Cambiamos contenido de #miId1
document.getElementById("miId1").innerHTML = "Nuevo contenido";

//Cambiamos contenido de #miId2
document.getElementById("miId2").textContent = "Nuevo texto";

//Añadimos la clase rojo a #miId3
document.getElementById("miId3").setAttribute("class", "miClase");

//Ponemos de color azul #miId4
document.getElementById("miId4").style.color = "blue";

//Escribimos ¡Hola mundo! en el documento
document.write("¡Hola mundo!");

// Creamos un botón y lo añadimos al final del body
var boton = document.createElement("button");
boton.innerHTML =" Haz clic";
document.body.appendChild(boton);

// Creamos un nuevo atributo y lo establecemos en un elemento
var nuevoAtributo = document.createAttribute("class");
nuevoAtributo.value = "miClase2";
document.getElementById("miId5").setAttributeNode(nuevoAtributo);

// Eliminamos el atributo 'class' de un elemento
document.getElementById("miId6").removeAttribute("class");

//Eliminamos #miId7
document.getElementById("miId7").remove();
```




4\. Escucha de eventos
----------------------

La escucha de eventos permite **detectar acciones del usuario o cambios en la página** y ejecutar funciones en respuesta a estos eventos. Para ello utilizamos el método `addEventListener()`



* Método: elemento.addEventListener()
  * Descripción: Agrega un «escuchador» a un elemento para detectar un evento específico y ejecutar una función en respuesta. 
  * Ejemplo:

  ```
  document.getElementById('miBoton').addEventListener('click', function() {alert('¡Has hecho clic!'); });
  ```
  * Mismo ejemplo con función flecha: 
  ```
  document.getElementById('miBoton').addEventListener('click', () => {alert('¡Has hecho clic!');});
  ```


**Tabla 3:** Métodos de escucha de eventos

El método `addEventListener()` agrega un «escuchador» a un elemento para detectar un evento específico y ejecutar una función en respuesta.

```
// Ejemplo de uso de addEventListener con función
const button = document.getElementById('miBoton');
button.addEventListener('click', function() {
  alert('¡Has hecho clic!');
});
```


Al aprovechar las **funcionalidades de ECMAScript**, como las funciones flecha, se puede escribir un **código más limpio** y mantenible, mejorando así la calidad y la eficiencia del desarrollo web.

Si prefieres utilizar funciones flecha de JavaScript, el código sería aún más legible:

```
// Ejemplo de uso de addEventListener con función flecha
const button = document.getElementById('miBoton');
const action = () => alert('¡Has hecho clic!');
button.addEventListener('click', action);
```


Acciones o eventos de escucha en JavaScript

A continuación se muestran algunas de las **acciones o eventos de escucha** más comunes que puedes utilizar en JavaScript para detectar interacciones del usuario, cambios en elementos de la página web, entrada de teclado y envío de formularios.


|Acción de Escucha|Descripción                                                                  |
|-----------------|-----------------------------------------------------------------------------|
|Click            |Se ejecuta cuando se hace clic en un elemento.                               |
|Mouseover        |Se ejecuta cuando el puntero del mouse se mueve sobre un elemento.           |
|Mouseout         |Se ejecuta cuando el puntero del mouse sale de un elemento.                  |
|Keydown          |Se ejecuta cuando se presiona una tecla.                                     |
|Keypress         |Se ejecuta cuando se mantiene presionada una tecla.                          |
|Keyup            |Se ejecuta cuando se suelta una tecla.                                       |
|Change           |Se ejecuta cuando el valor de un elemento de entrada cambia (input, select). |
|Submit           |Se ejecuta cuando se envía un formulario.                                    |
|Focus            |Se ejecuta cuando un elemento recibe el foco.                                |
|Blur             |Se ejecuta cuando un elemento pierde el foco.                                |
|Load             |Se ejecuta cuando un recurso (como una imagen) se ha cargado completamente.  |
|Scroll           |Se ejecuta cuando se realiza desplazamiento en un elemento.                  |
|Resize           |Se ejecuta cuando se cambia el tamaño de la ventana del navegador.           |
|Contextmenu      |Se ejecuta cuando se hace clic con el botón derecho del mouse en un elemento.|

