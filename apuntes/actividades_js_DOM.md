# Ejercicio de JavaScript DOM


## Proyecto 1: Accediendo, manipulando y creando elementos del DOM

En este primer proyecto vamos a practicar como acceder a los elementos de la página web, así como a crearlos y eliminarlos. 

Todos los ejercicios van a trabajar con una página modelo ya creada. Es página se encuentra en la carpeta actividades/Modelo dentro del github.

### Ejercicio 1
En la página web ves que tienes un titular **Hola Mundo**. Se trata de añadir una función javascript para que al pulsar el botón **cambiar** este título se convierta en **Hola Mundo con Javascript** . El unico cambio necesario es el bloque con el texto **cambiar** y  completar la función **cambiar()** que aparece en el código de la página.

Debe cambiar de **Hola Mundo** a **Hola Mundo Javascript**

### Ejercicio 2
Tienes la página web [modelo](https://www.aulascript.com/evaluar/dom_basico_modelo.html) que debe cambiar el color del titular del **negro** actual a **rojo** y además debe quedar centrado. El único cambio será en el bloque **cambiar** y el código de función **cambiar()**

El bloque cambiar acepta el click, el color del titular cambia a rojo y queda centrado

### Ejercicio 3
Escribe un script de nombre **creaDiv()** que crea un nuevo bloque div en la página modelo. El bloque se creará al pulsar el botón con texto **Crear**, sus colores serán texto blanco con fondo rojo y el texto quedará centrado. Este texto consiste en la cadena **Javascript permite crear páginas dinámicas**.

El botón ya existe solo es necesario escribir la función, procurando usar los métodos de document para crear nodos.

### Ejercicio 4
En la página web modelo debes lograr que al pulsar el botón con el texto **borrar** se deberá eliminar el bloque que aparece bajo el titular, no ocultar, sino borrarlo. Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función **borrar()**

Al pulsar el botón el subtítulo debe dejar de existir en el código de la página. No deb producirse error al volver a pulsar el botón.

### Ejercicio 5
La página web modelo contiene tres imágenes. Cada imagen está en un bloque **figure** con un elemento **figcaption** para un pie de foto. Al pulsar sobre cualquier imagen se debe mostar su atributo **alt** en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.

Cada imagen es como un botón que alterna el pie de foto entre vacio (sin texto) y el valor del atributo **alt** de cada una.

### Ejercicio 6
En este script debes leer todos los elementos tipo imagen de la página y mostrar sus **urls** en un bloque tipo div cuyo **id** es **fuentes** y que ya existe en la página modelo usada para estos ejercicios. El script se ejecutará al pulsar el botón con el texto **fuentes**

El bloque ya está creado solo tienes que crear la función denominada **fuentesImg()** asociada al botón fuentes

### Ejercicio 7
El script que tienes que crear en la página modelo debe cambiar la clase del elemento que contiene al encabezado de la página. Al pulsar sobre el titular se añadirá o se eliminarás (toggle) la clase de nombre **activo**

Tienes que modificar el botón **clase** y completar la función toggleClase() para producir este efecto.

### Ejercicio 8
Escribe el código de una función nuevoBloque() que deberá crear un nuevo elemento **div**, con una class de nombre **destacar**. El bloque contendrá, en negrita, el texto **Página Modelo**. Este bloque debe aparecer justo antes del bloque subtitulo es decir justo después del titular de la página. Se activará con el botón superior que contiene el texto **Subtitulo**

La función se llamara **intercalar()**

### Ejercicio 9
En la página modelo tienes un elemento div con un imagen en su interior. Cada vez que hagas click con el ratón sobre el la imagen cambiará.

El bloque tiene como clase **carrousel**. Dispones de tres imágenes: uno.png, dos.png y tres.png. Se deberán ir sucediendo en forma circular, despues de la última vuelve a la primera

### Ejercicio 10
El primer botón de la barra de botones en la parte superior de la página tiene el texto **abrir/cerrar**. Al pulsarlo se deben ocultar o mostrar los botones restantes, pero el de **abrir/cerrrar** debe quedar visible.

El valor de la propiedad display de los botones es **inline-block**. La barra tiene en el atributo class el valor **botones** y cada botón tiene como clase **boton**
