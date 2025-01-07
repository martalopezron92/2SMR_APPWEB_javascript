1\. JavaScript básico: Introducción
--------------------------------------------

**JavaScript**, o **JS**, es un lenguaje de programación **orientado a objetos** ampliamente utilizado en el **desarrollo web del lado del cliente**. Con él, se pueden crear experiencias interactivas y dinámicas en las páginas web, manipular el DOM (Document Object Model) y responder a eventos del usuario. Permite realizar operaciones aritméticas y manipulación de datos en tiempo real en el navegador.

2\. Tutorial JavaScript: Breve historia
---------------------------------------

JavaScript fue creado por **Brendan Eich** en **1995** mientras trabajaba en **Netscape Communications Corporation**. Inicialmente, se llamó _Mocha_, el cual fue renombrado posteriormente a _LiveScript_, para finalmente quedar como JavaScript, cuando se estableció una colaboración con **Sun Microsystems**, que había desarrollado Java.

A lo largo de los años, JavaScript ha evolucionado significativamente. Se han desarrollado estándares como **ECMAScript** para definir su sintaxis y características, y hoy en día, JavaScript se utiliza no solo en el desarrollo web, sino también en el desarrollo de **videojuegos, aplicaciones móviles, de escritorio y de servidor**, gracias a plataformas como Node.js.

3\. ¿Cómo se implementa JavaScript?
-----------------------------------

Implementar JavaScript sigue un enfoque similar al de CSS, con **tres técnicas principales**:

*   **En línea**.
*   **Incorporación en el documento** mediante la etiqueta `<script>`
*   Carga desde un **archivo externo**. **(Esta es la técnica que vamos a usar)**

En la actualidad, en el desarrollo de proyectos complejos, es **preferible utilizar la carga de JavaScript desde archivos externos**, mientras que las técnicas de JavaScript en línea y la incorporación en el documento mediante la etiqueta `<script>` tienden a utilizarse más para pruebas o en escenarios de desarrollo más simples.

La **carga desde un archivo externo ofrece múltiples ventajas** que la hacen atractiva para proyectos complejos:

*   Promueve la **reutilización del código** al permitir que múltiples páginas web accedan al mismo archivo JavaScript.
*   Facilita la gestión del código al mantenerlo en archivos separados, lo que puede **mejorar la organización y la mantenibilidad** del proyecto.
*   Permite el **almacenamiento en caché del archivo JavaScript**, lo que puede mejorar el rendimiento y reducir el tiempo de carga para los usuarios que visitan múltiples páginas del sitio.
*   Permite **aplicar técnicas de optimización** específicas, como la minificación y la concatenación, que pueden reducir el tamaño del archivo y mejorar el rendimiento de la página.



### 3.1. JavaScript en línea

La técnica en línea aprovecha atributos especiales que describen eventos, como un clic del ratón. Para que un elemento responda a un evento utilizando esta técnica, simplemente agregamos el atributo correspondiente con el código que deseamos que se ejecute.

**Ejemplo de JavaScript en línea:**

En el siguiente ejemplo, cuando el usuario hace clic en el texto «Clic aquí», se activa el evento `onclick`, lo que a su vez ejecuta la función `alert()`, mostrando el mensaje «¡Hola Mundo!» en un cuadro de diálogo emergente en el navegador.

OJO: En los siguientes ejemplos del tutorial de JavaScript, utilizaremos la función «_alert_» para presentar los resultados. «_alert_» es una función en JavaScript que se utiliza para mostrar mensajes emergentes en el navegador. **Ejemplo:** `**alert('¡Hola Mundo!')**;`

```
<!DOCTYPE html>
<html lang="es">
<head>
   <meta charset="utf-8">
   <title>JavaScript</title>
</head>
<body>
   <p onclick="alert('¡Hola Mundo!')">Clic aquí</p>
</body>
</html>
```


El atributo «onclick» forma parte de una serie de atributos proporcionados por HTML para manejar eventos. 

### 3.2. JavaScript incorporado en el documento mediante la etiqueta ``<script>``

La técnica de **JavaScript incorporado en el documento mediante la etiqueta `<script>`** permite incluir código JavaScript directamente dentro del documento HTML. Veamos cómo funciona esta técnica:

1.  **Etiqueta `<script>`**: Se utiliza para delimitar el inicio y el fin del código JavaScript dentro del documento HTML.
2.  **Ubicación en el documento**: Puede colocarse en la sección `<head>` o `<body>` del documento HTML, dependiendo de cuándo se desee que se ejecute el código JavaScript (por ejemplo, antes de que se cargue el contenido de la página o después de que se haya cargado).
3.  **Contenido JavaScript**: El código JavaScript que se encuentra dentro de la etiqueta `<script>` será interpretado y ejecutado por el navegador cuando se procese la página.
4.  **Ejecución del código**: El navegador ejecutará el código JavaScript en el orden en que se encuentra en el documento.

**Ejemplo:**

```
<p>Clic aquí</p>
<script>
  // Este es el código JavaScript integrado
  // El siguiente código muestra una alerta cuando se hace clic en el párrafo
  var parrafo = document.querySelector("p");
  parrafo.addEventListener("click", function() {
    alert("¡Hola Mundo!");
  });
</script>
```

El código anterior es una combinación de HTML y JavaScript que crea una interacción de clic en un elemento de párrafo.

*   `var parrafo = document.querySelector("p");`: Esta línea de código selecciona el primer elemento `<p>` (párrafo) que encuentra en el documento HTML y lo asigna a la variable `parrafo`. `document.querySelector()` es un método que permite seleccionar un elemento HTML utilizando un selector CSS.
*   `parrafo.addEventListener("click", function() { ... });`: Esta línea de código agrega un «escuchador de eventos» al elemento `<p>`. Escucha el evento de clic en el elemento y ejecuta la función proporcionada como segundo argumento cuando se produce el evento. En este caso, la función anónima `function() { ... }` se ejecutará cuando se haga clic en el párrafo.
*   `alert("¡Hola Mundo!");`: Dentro de la función anónima, se llama a la función `alert()`, que muestra una ventana emergente en el navegador con el mensaje «¡Hola Mundo!». Por lo tanto, cuando se hace clic en el párrafo, se mostrará una ventana emergente con este mensaje.

### 3.3. JavaScript carga desde un archivo externo

La técnica de cargar JavaScript desde un archivo externo implica almacenar el código JavaScript en un archivo separado con extensión `.js` y luego vincular ese archivo al documento HTML utilizando la etiqueta `<script>`. Veamos cómo funciona esta técnica:

1.  **Archivo externo**: El código JavaScript se almacena en un archivo independiente con extensión `.js`, por ejemplo, `script.js`.
2.  **Etiqueta `<script>`**: Se utiliza en el documento HTML para vincular el archivo externo que contiene el código JavaScript. La etiqueta `<script>` no contiene el código en sí, sino que especifica la ubicación del archivo externo mediante el atributo `src`. Ejemplo: <script src=»script.js»></script>
3.  **Ubicación en el documento**: La etiqueta `<script>` se coloca generalmente en la sección `<head>` o al final del `<body>` del documento HTML. En nuestro caso, vamos a ubicar la etiqueta al final del <body>.
4.  **Contenido del archivo externo**: El archivo externo `.js` contiene el código JavaScript que se desea ejecutar en la página web.
5.  **Ejecución del código**: Cuando el navegador carga la página HTML, también solicita y carga el archivo JavaScript externo, y luego ejecuta el código JavaScript contenido en ese archivo.

Para empezar, carga el documento JavaScript al final del <body>

Ejemplo:

Supongamos que tenemos un archivo JavaScript externo llamado `script.js` que contiene el siguiente código:

```
// script.js
var parrafo = document.querySelector("p");
parrafo.addEventListener("click", function() {
  alert("¡Hola Mundo desde archivo externo!");
});
```
En el documento HTML, enlazamos este archivo externo de la siguiente manera:

```
<!DOCTYPE html>
<html lang="es">
<head>
   <meta charset="utf-8">
   <title>JavaScript</title>
</head>
<body>
   <p>Clic aquí</p>
   <script src="script.js"></script>
</body>
</html>
```

Cuando se carga esta página en el navegador y se hace clic en el párrafo, se mostrará una ventana emergente con el mensaje «¡Hola Mundo desde archivo externo!».

**¡OJO!** Cuando enlazas tu script en la sección `<head>` del HTML, es posible que el script se esté ejecutando antes de que el resto del HTML y que, por tanto, no se vea el mensaje emergente (al no poder encontrar el párrafo en el DOM). La solución a este problema es usar el evento **`DOMContentLoaded`**.

### 3.3.1. Solución al problema de cargar el script en el ``<head>``

Una **solución al problema de cargar el script en el ``<head>``** es utilizar el evento `DOMContentLoaded`. De esta forma, te aseguras de que el script no se ejecute hasta que todo el DOM esté listo. Ejemplo:

```
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el párrafo y agrega el evento click
    var parrafo = document.querySelector("p");
    parrafo.addEventListener("click", function() {
        alert("¡Hola Mundo!");
    });
});
```


4\. Función `console.log`
------------------------

En los siguientes ejemplos del tutorial de JavaScript, **emplearemos la función «_console.log_» y archivos JavaScript externos** para presentar los resultados.

_«console.log_» es una función en JavaScript que se utiliza para imprimir mensajes o datos en la consola del navegador o del entorno de desarrollo. Utilizar _«console.log_» es una práctica común para depurar y visualizar datos durante el desarrollo. Ejemplo: **console.log(«Hola Mundo!»);**

Para ver la consola en un navegador, normalmente puedes hacer **clic derecho en tu página web, seleccionar «Inspeccionar» y luego ir a la pestaña «Consola»**. También puedes usar `Ctrl + Shift + J` o `Cmd + Option + J` en muchos navegadores para abrir la consola directamente.


5\. Tipos de datos en JavaScript
--------------------------------

Los tipos de datos en JavaScript pueden clasificarse en dos categorías principales: primitivos y no primitivos (objetos).


### 5.1. Tipos de datos primitivos

1.  **Number**: Representa valores numéricos, ya sea enteros o de punto flotante. Ejemplos: `5`, `3.14`, `-10`.
2.  **String**: Representa datos de texto. Se escriben entre comillas simples (`'`) o dobles (`"`). Ejemplos: `'Hola'`, `"Mundo"`.
3.  **Boolean**: Representa un valor lógico que puede ser `true` o `false`.
4.  **Null**: Representa la ausencia intencional de cualquier valor o referencia de objeto.
5.  **Undefined**: Representa un valor no definido, por ejemplo, una variable que se ha declarado pero no se le ha asignado ningún valor.

**Diferencias entre null y undefined**

1.  **`undefined`**: Este valor se asigna automáticamente a una variable que se ha declarado pero no se le ha asignado ningún valor. También se devuelve cuando se accede a una propiedad de un objeto que no existe, o cuando una función no devuelve explícitamente ningún valor. Es una indicación de que algo no está definido o no está presente en ese momento.
2.  **`null`**: Este valor se puede asignar a una variable para indicar que no tiene ningún valor o que está vacía de manera intencional. A menudo se utiliza cuando se quiere establecer una variable para que no haga referencia a ningún objeto.

Ejemplo:

```
// Number: Representa valores numéricos
var numeroEntero = 5;
var numeroDecimal = 3.14;
var numeroNegativo = -10;

console.log("Número Entero:", numeroEntero);
console.log("Número Decimal:", numeroDecimal);
console.log("Número Negativo:", numeroNegativo);

// String: Representa datos de texto
var saludo = 'Hola';
var despedida = "Mundo";

console.log("Saludo:", saludo);
console.log("Despedida:", despedida);

// Boolean: Representa un valor lógico (true o false)
var esVerdadero = true;
var esFalso = false;

console.log("Es Verdadero:", esVerdadero);
console.log("Es Falso:", esFalso);

// Null: Representa la ausencia intencional de cualquier valor
var valorNulo = null;

console.log("Valor Nulo:", valorNulo);

// Undefined: Representa un valor no definido
var valorNoDefinido;

console.log("Valor No Definido:", valorNoDefinido);
```


### 5.2. Tipos de datos no primitivos (objetos)

1.  **Object**: Representa un objeto que puede contener múltiples valores como propiedades. Ejemplo: `{ nombre: 'Andrea', edad: 30 }`.
2.  **Array**: Representa una colección ordenada de valores. Ejemplo: `['manzana', 'naranja', 'plátano']`.
3.  **Function**: Representa una función, que es un bloque de código reutilizable que se puede invocar.
4.  **Date**: Representa una fecha y hora específicas.
5.  **RegExp**: Representa una expresión regular, que se utiliza para buscar patrones dentro de las cadenas de texto.

En el siguiente ejemplo:

*   `persona` es un objeto que contiene propiedades como `nombre`, `edad` y `ciudad`.
*   `frutas` es un array que contiene nombres de frutas.
*   `saludar` es una función que imprime un saludo personalizado.
*   `fechaActual` es un objeto Date que representa la fecha y hora actuales.
*   `patron` es una expresión regular que busca la palabra «javascript» de manera insensible a mayúsculas.

```
// Object: Representa un objeto con propiedades
var persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'EjemploCity'
};

console.log("Objeto Persona:", persona);

// Array: Representa una colección ordenada de valores
var frutas = ['manzana', 'naranja', 'plátano'];

console.log("Array de Frutas:", frutas);

// Function: Representa una función reutilizable
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

saludar("Andrea");

// Date: Representa una fecha y hora específicas
var fechaActual = new Date();

console.log("Fecha Actual:", fechaActual);

/* RegExp: Representa una expresión regular para buscar patrones
/: Delimitadores de la expresión regular.
java: Coincide literalmente con la cadena "java".
(script)?: Grupo de captura opcional. Puede coincidir con "script" cero o una vez.
i: Modificador de la expresión regular que hace que la coincidencia sea insensible a mayúsculas y minúsculas.
Por lo tanto, esta expresión regular buscará "java" seguido opcionalmente por "script" en una cadena de texto, y la búsqueda no será sensible a mayúsculas y minúsculas. Esto significa que coincidirá con "java", "JavaScript" o "javaSCRIPT", entre otras posibles variaciones.*/
var patron = /java(script)?/i;

console.log("Expresión Regular:", patron);
```


5.3. Comentarios
----------------

Hay dos formas principales de agregar comentarios en JavaScript:

1.  **Comentarios de una línea**: Estos comentarios se utilizan para añadir explicaciones breves en una sola línea de código. Se crean precediendo el comentario con `//`.

```
   // Este es un comentario de una línea en JavaScript
```


2.  **Comentarios de varias líneas**: Estos comentarios se utilizan para notas más extensas o explicaciones que abarcan múltiples líneas de código. Se crean encerrando el texto del comentario entre `/*` y `*/`.

```
   /*
   Este es un comentario de
   varias líneas en JavaScript
   */
```


Es importante destacar que los comentarios son ignorados por el intérprete de JavaScript durante la ejecución del programa, por lo que no afectan el comportamiento del código. Sin embargo, son útiles para mejorar la legibilidad del código y para documentar su funcionalidad.

6\. Variables
-------------

Las variables en JavaScript se utilizan para almacenar valores y se declaran utilizando las palabras clave `var`, `let`, o `const`.

### 6.1. Declaración de variables

*   **var**: Es la forma tradicional de declarar variables en JavaScript. Se puede utilizar para declarar variables tanto locales como globales. Ejemplo: `var x = 5;`
*   **let**: Introducido en ECMAScript 6 (ES6), `let` permite declarar variables de ámbito de bloque. Esto significa que su alcance está limitado al bloque en el que se declaran. Ejemplo: `let y = 10;`
*   **const**: También introducido en ES6, `const` se utiliza para declarar variables de solo lectura, cuyo valor no puede ser reasignado una vez que se ha inicializado. Ejemplo: `const PI = 3.14;`

### 6.2. Alcance de las variables

*   El alcance de una variable se refiere a la parte del código donde la variable es accesible. Las variables declaradas con `var` tienen un alcance de función, mientras que las declaradas con `let` y `const` tienen un alcance de bloque.

Ejemplo:

```
// Declaración y asignación de variables con let
let edad = 30;
edad = 31; // Se puede reasignar el valor de una variable declarada con let

// Declaración de variable constante con const
const PI = 3.14;
// PI = 3.14159; // Esto provocará un error ya que no se puede reasignar una constante

// Declaración de variable con var
var nombre = "Juan";
var nombre = "María"; // Se puede volver a declarar una variable con var

console.log(edad); // Salida: 31
console.log(PI); // Salida: 3.14
console.log(nombre); // Salida: María

```


En este ejemplo:

*   `let edad = 30;`: Declaramos una variable llamada `edad` con `let` y le asignamos el valor `30`. Luego, la reasignamos a `31`.
*   `const PI = 3.14;`: Declaramos una constante llamada `PI` con `const` y le asignamos el valor `3.14`. Intentamos reasignar un valor a `PI`, lo cual arrojará un error porque las constantes no pueden ser reasignadas.
*   `var nombre = "Juan";`: Declaramos una variable llamada `nombre` con `var` y le asignamos el valor `"Juan"`. Luego, volvemos a declararla con el mismo nombre pero con otro valor `"María"`, lo cual es posible con `var`.

Ejemplo para comprender las diferencias entre let y var:

```
// Ejemplo de alcance de let y var
function ejemploAlcance() {
    if (true) {
        let variableLet = "Variable con alcance de bloque";
        var variableVar = "Variable con alcance de función";
    }

    console.log(variableVar); // Salida: "Variable con alcance de función"
    // console.log(variableLet); // Esto causaría un error ya que variableLet está fuera del alcance de bloque
}

ejemploAlcance();
```

En este ejemplo:

*   `let variableLet = "Variable con alcance de bloque";`: Declaramos una variable llamada `variableLet` dentro de un bloque `if` utilizando `let`, lo que significa que su alcance se limita a ese bloque.
*   `var variableVar = "Variable con alcance de función";`: Declaramos una variable llamada `variableVar` dentro del mismo bloque `if`, pero utilizando `var`, lo que significa que su alcance se extiende a toda la función.
*   Al intentar acceder a `variableVar` fuera del bloque `if`, el valor se imprime correctamente porque `var` tiene un alcance de función.
*   Sin embargo, si intentamos acceder a `variableLet` fuera del bloque `if`, se producirá un error porque `let` tiene un alcance de bloque y no está definida fuera de él.

Utilizar `let` y `const`, en vez de `var`, permite un código más seguro y menos propenso a errores, ya que ayuda a evitar problemas asociados con el ámbito y la reasignación no deseada de variables.

### 6.3. Reglas para nombres de variables

*   Los nombres de las variables pueden contener letras, dígitos, guiones bajos (\_) y signos de dólar ($).
*   El nombre de la variable debe comenzar con una letra, un guión bajo (\_) o un signo de dólar ($).
*   JavaScript distingue entre mayúsculas y minúsculas en los nombres de las variables.
*   No se pueden utilizar palabras clave reservadas de JavaScript como nombres de variables.

Ejemplos:

1.  Correcto:

```
let edad = 25;
let nombreCompleto = "Juan Pérez";
let _precioProducto = 50.99;
let $descuento = 10;
```


2.  Incorrecto (no comienza con letra, guión bajo o signo de dólar):

```
let 123numero = 123; // Incorrecto, el nombre no puede comenzar con un número.
let !resultado = true; // Incorrecto, el nombre no puede comenzar con un signo de exclamación.
```


3.  Incorrecto (utiliza caracteres no permitidos):

```
let nombre@usuario = "john_doe"; // Incorrecto, se utilizó el carácter @, que no está permitido.
let variable#1 = 5; // Incorrecto, se utilizó el carácter #, que no está permitido.
```


4.  Correcto (distingue entre mayúsculas y minúsculas):

```
let temperatura = 28;
let Temperatura = 30;
console.log(temperatura); // Imprime 28
console.log(Temperatura); // Imprime 30
```


5.  Incorrecto (utiliza una palabra clave reservada):

```
let var = "Hola"; // Incorrecto, 'var' es una palabra clave reservada y no puede ser usada como nombre de variable.
```


### 6.4. Mostrar variables en una cadena

Para mostrar variables dentro de una cadena en JavaScript, puedes usar la concatenación de cadenas o las plantillas de cadena (_template literals_).

Ambos enfoques producen el mismo resultado, pero las plantillas de cadena son más modernas (son una característica introducida en ECMAScript 6, también conocido como ES6) y ofrecen una sintaxis más legible y conveniente, especialmente cuando necesitas incrustar varias variables en una cadena.

1.  Concatenación de cadenas:

```
let nombre = "Andrea";
let edad = 30;

// Concatenación de cadenas utilizando el operador +
let mensaje = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log(mensaje);
```


2.  Plantillas de cadena (_template literals_):

```
let nombre = "Andrea";
let edad = 30;

// Plantilla de cadena utilizando backticks (`) y ${}
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje);
```


**Recuerda usar el carácter de comilla invertida (\`)**, también conocido como acento grave o _backtick_ en inglés, para crear plantillas de cadena.

### 6.5. Operadores

Los operadores en JavaScript son símbolos especiales que realizan operaciones sobre valores. Veamos los tipos de operadores utilizando tablas y ejemplos con cuadros de diálogo que permiten que el usuario introduzca datos para realizar las distintas operaciones.

**Función `prompt`**

1.  `prompt`: Es una función que muestra un cuadro de diálogo al usuario en el navegador con un mensaje y un campo de entrada para que el usuario ingrese datos. El usuario puede escribir texto en este campo y hacer clic en «Aceptar» para enviarlo.
2.  `parseInt`: Es una función que convierte una cadena de texto en un número entero. Toma una cadena como argumento y devuelve un entero después de analizar o leer un número de esa cadena.
3.  `parseFloat`: Es una función que convierte una cadena de texto en un número de punto flotante (número decimal). Toma una cadena como argumento y devuelve un número de punto flotante después de analizar o leer un número de esa cadena.

`prompt` se usa para obtener una entrada del usuario, que generalmente es en forma de texto. A continuación se usa `parseInt` (convertir texto en un número entero) o `parseFloat` (convertir texto en un número flotante) para que la entrada del usuario pueda ser usada en operaciones matemáticas.

Ejemplo:

```
// Solicita al usuario que ingrese un número
let userInput = prompt("Por favor, inserta un número:");

// Convierte la entrada del usuario en un número entero
let number = parseInt(userInput);

// Verifica si el usuario ingresó un número válido
if (!isNaN(number)) {
    // Si el usuario ingresó un número válido, muestra el resultado en la consola
    console.log("El número insertado es:", number);
} else {
    // Si el usuario no ingresó un número válido, muestra un mensaje de error en la consola
    console.error("Error: Entrada inválida. Por favor, inserta un número válido.");
}
```


#### 6.5.1. Operadores básicos


|Operador|Descripción               |Ejemplo               |Resultado|
|--------|--------------------------|----------------------|---------|
|+       |Suma                      |var resultado = 5 + 3;|8        |
|–       |Resta                     |var resultado = 5 - 3;|2        |
|*       |Multiplicación            |var resultado = 5 * 3;|15       |
|/       |División                  |var resultado = 6 / 3;|2        |
|%       |Módulo (Resto de División)|var resultado = 7 % 3;|1        |




Ejemplo: Este script solicita al usuario que inserte dos números para cada operación matemática y luego muestra el resultado en la consola.

```
// Operadores básicos
// Suma
let numero1 = parseInt(prompt("Inserta el primer número para sumar:"));
let numero2 = parseInt(prompt("Inserta el segundo número para sumar:"));
let suma = numero1 + numero2;
console.log("La suma de", numero1, "y", numero2, "es:", suma);

// Resta
let numero3 = parseInt(prompt("Inserta el primer número para restar:"));
let numero4 = parseInt(prompt("Inserta el segundo número para restar:"));
let resta = numero3 - numero4;
console.log("La resta de", numero3, "y", numero4, "es:", resta);

// Multiplicación
let numero5 = parseInt(prompt("Inserta el primer número para multiplicar:"));
let numero6 = parseInt(prompt("Inserta el segundo número para multiplicar:"));
let multiplicacion = numero5 * numero6;
console.log("La multiplicación de", numero5, "y", numero6, "es:", multiplicacion);

// División
let numero7 = parseInt(prompt("Inserta el primer número para dividir:"));
let numero8 = parseInt(prompt("Inserta el segundo número para dividir:"));
let division = numero7 / numero8;
console.log("La división de", numero7, "y", numero8, "es:", division);

// Módulo
let numero9 = parseInt(prompt("Inserta el primer número para calcular el módulo:"));
let numero10 = parseInt(prompt("Inserta el segundo número para calcular el módulo:"));
let modulo = numero9 % numero10;
console.log("El módulo de", numero9, "y", numero10, "es:", modulo);
```


#### 6.5.2. Operadores que simplifican la ejecución de operaciones


|Operador|Descripción                           |Ejemplo                      |Resultado   |
|--------|--------------------------------------|-----------------------------|------------|
|++      |Incremento (añade 1 al valor)         |var numero = 5; numero++;    |numero es 6 |
|—       |Decremento (resta 1 al valor)         |var numero = 5; numero--;    |numero es 4 |
|+=      |Incremento por un valor específico    |var numero = 5; numero += 3; |numero es 8 |
|-=      |Decremento por un valor específico    |var numero = 5; numero -= 2; |numero es 3 |
|*=      |Multiplicación por un valor específico|var numero = 5; numero *= 2; |numero es 10|
|/=      |División por un valor específico      |var numero = 10; numero /= 2;|numero es 5 |
|%=      |Módulo (Resto de División)            |var numero = 7; numero %= 3; |numero es 1 |



Ejemplo: Este script solicita al usuario que escriba un número para realizar las operaciones. Luego, aplica cada uno de los operadores especificados y muestra los resultados en la consola.

```
// Operadores de incremento y decremento
let numero1 = parseInt(prompt("Inserta un número para utilizar en los operadores de incremento y decremento:"));

// Incremento
console.log("Incrementando el número insertado en 1:");
numero1++;
console.log("El resultado después del incremento es:", numero1);

// Decremento
console.log("Decrementando el número insertado en 1:");
numero1--;
console.log("El resultado después del decremento es:", numero1);

// Operadores de asignación con valor específico
let numero2 = parseInt(prompt("Inserta un número para utilizar en los operadores de asignación con valor específico:"));

// Incremento por un valor específico
console.log("Incrementando el número insertado por 3:");
numero2 += 3;
console.log("El resultado después del incremento por un valor específico es:", numero2);

// Decremento por un valor específico
console.log("Decrementando el número insertado por 2:");
numero2 -= 2;
console.log("El resultado después del decremento por un valor específico es:", numero2);

// Multiplicación por un valor específico
console.log("Multiplicando el número insertado por 2:");
numero2 *= 2;
console.log("El resultado después de la multiplicación por un valor específico es:", numero2);

// División por un valor específico
console.log("Dividiendo el número insertado entre 2:");
numero2 /= 2;
console.log("El resultado después de la división por un valor específico es:", numero2);

// Módulo por un valor específico
console.log("Obteniendo el módulo del número insertado dividido entre 3:");
numero2 %= 3;
console.log("El resultado del módulo por un valor específico es:", numero2);
```


#### 6.5.3. Operadores lógicos



* Operador: &&
  * Uso: expr1 && expr2
  * Descripción: Devuelve verdadero si ambos operandos son verdaderos
* Operador: ||
  * Uso: expr1 || expr2
  * Descripción: Devuelve verdadero si uno de los operandos es verdadero
* Operador: !
  * Uso: !expr
  * Descripción: Devuelve verdadero si el operando es falso. Si el operando es verdadero devuelve falso


Ejemplo: Este script solicita al usuario que inserte dos valores (0 o 1) para utilizar en los operadores lógicos. Luego, aplica cada uno de los operadores `&&`, `||` y `!` a estos valores y muestra los resultados en la consola.

```
// Operadores lógicos
let valor1 = parseInt(prompt("Inserta el primer valor (0 o 1) para utilizar en los operadores lógicos:"));
let valor2 = parseInt(prompt("Inserta el segundo valor (0 o 1) para utilizar en los operadores lógicos:"));

// Operador &&
console.log("Operador && (AND):");
let resultadoAnd = valor1 && valor2;
console.log("El resultado de", valor1, "&&", valor2, "es:", resultadoAnd);

// Operador ||
console.log("Operador || (OR):");
let resultadoOr = valor1 || valor2;
console.log("El resultado de", valor1, "||", valor2, "es:", resultadoOr);

// Operador !
console.log("Operador ! (NOT):");
let resultadoNot1 = !valor1;
console.log("El resultado de !", valor1, "es:", resultadoNot1);

let resultadoNot2 = !valor2;
console.log("El resultado de !", valor2, "es:", resultadoNot2);
```


#### 6.5.4. Operadores de comparación


|Operador|Significado            |Ejemplo         |Resultado|
|--------|-----------------------|----------------|---------|
|==      |Igual a                |5 == 55 == "5"  |truetrue |
|===     |Igual a (estricto)     |5 === '5'5 === 5|falsetrue|
|!=      |Diferente de           |5 != 3          |true     |
|!==     |Diferente de (estricto)|5 !== '5'       |true     |
|>       |Mayor que              |5 > 3           |true     |
|<       |Menor que              |3 < 5           |true     |
|>=      |Mayor o igual que      |5 >= 5          |true     |
|<=      |Menor o igual que      |3 <= 5          |true     |


Los operadores `===` y `!==` son operadores de igualdad estricta en JavaScript. Se utilizan para comparar dos valores y verificar si son iguales (o no) tanto en valor como en tipo de datos.

Ejemplo: Este script solicita al usuario que inserte dos valores para utilizar en los operadores de comparación. Luego, aplica cada uno de los operadores y muestra los resultados en la consola.

```
// Operadores de comparación
let valor1 = parseFloat(prompt("Ingrese el primer valor para utilizar en los operadores de comparación:"));
let valor2 = parseFloat(prompt("Ingrese el segundo valor para utilizar en los operadores de comparación:"));

// Operador ==
console.log("Operador == (Igual a):");
let resultadoIgual = valor1 == valor2;
console.log("El resultado de", valor1, "==", valor2, "es:", resultadoIgual);

// Operador ===
console.log("Operador === (Igual a estricto):");
let resultadoEstricto = valor1 === valor2;
console.log("El resultado de", valor1, "===", valor2, "es:", resultadoEstricto);

// Operador !=
console.log("Operador != (Diferente de):");
let resultadoDiferente = valor1 != valor2;
console.log("El resultado de", valor1, "!=", valor2, "es:", resultadoDiferente);

// Operador !==
console.log("Operador !== (Diferente de estricto):");
let resultadoDiferenteEstricto = valor1 !== valor2;
console.log("El resultado de", valor1, "!==", valor2, "es:", resultadoDiferenteEstricto);

// Operador >
console.log("Operador > (Mayor que):");
let resultadoMayorQue = valor1 > valor2;
console.log("El resultado de", valor1, ">", valor2, "es:", resultadoMayorQue);

// Operador <
console.log("Operador < (Menor que):");
let resultadoMenorQue = valor1 < valor2;
console.log("El resultado de", valor1, "<", valor2, "es:", resultadoMenorQue);

// Operador >=
console.log("Operador >= (Mayor o igual que):");
let resultadoMayorIgual = valor1 >= valor2;
console.log("El resultado de", valor1, ">=", valor2, "es:", resultadoMayorIgual);

// Operador <=
console.log("Operador <= (Menor o igual que):");
let resultadoMenorIgual = valor1 <= valor2;
console.log("El resultado de", valor1, "<=", valor2, "es:", resultadoMenorIgual);
```


7\. Cadenas de texto y caracteres de escape
-------------------------------------------

En JavaScript, las variables no están limitadas a almacenar solo números; también pueden contener texto. Para asignar texto a una variable, lo encerramos entre comillas simples o dobles. Por ejemplo:

```
let texto = "¡Hola Mundo!";
alert(texto);
```

En este código, creamos una variable llamada `texto` y le asignamos la cadena de caracteres «¡Hola Mundo!». Cuando mostramos la variable con `alert()`, se muestra el texto «Hola Mundo!» sin las comillas.

Es importante tener en cuenta que podemos concatenar texto utilizando el operador `+`. Por ejemplo:

```
let texto = "Mi nombre es ";
texto = texto + "Andrea";
alert(texto);
```


En este caso, agregamos el texto «Andrea» al final del texto «Mi nombre es «, resultando en «Mi nombre es Andrea».

También podemos concatenar texto con números. JavaScript convierte automáticamente los números en cadenas de caracteres y los agrega al texto. Por ejemplo:

```
let mitexto = "El número es " + 8;
alert(mitexto); // "El número es 8"
```


Sin embargo, es importante tener en cuenta que JavaScript no realiza operaciones aritméticas al concatenar texto y números. Por ejemplo:

```
let mitexto = "30" + 33;
alert(mitexto); // "3032"
```


En este caso, el resultado es la cadena de caracteres «3033», ya que JavaScript trata ambos valores como texto en lugar de números.

**Caracteres de escape**

Las cadenas de caracteres pueden contener una variedad de **caracteres especiales, como comillas simples, comillas dobles, tabulaciones y saltos de línea.** Sin embargo, al utilizar estos caracteres dentro de una cadena de texto, puede ser necesario escaparlos para evitar conflictos con la sintaxis del lenguaje. Para esto, JavaScript ofrece una serie de caracteres de escape, veamos los más destacados.



* Carácter de Escape: \'
  * Descripción: Comilla simple
  * Ejemplo: var texto = 'Me gusta \'CSS\'';
  * Resultado: Me gusta 'CSS'
* Carácter de Escape: \"
  * Descripción: Comilla doble
  * Ejemplo: var texto = "Me encanta \"HTML\"";
  * Resultado: Me encanta "HTML"
* Carácter de Escape: \\
  * Descripción: Barra invertida
  * Ejemplo: var texto = "Este es un ejemplo de una barra invertida: \\";
  * Resultado: Este es un ejemplo de una barra invertida: \
* Carácter de Escape: \n
  * Descripción: Nueva línea
  * Ejemplo: var texto = "Primera línea\nSegunda línea";
  * Resultado: Muestra dos líneas de texto.
* Carácter de Escape: \t
  * Descripción: Tabulación
  * Ejemplo: var texto = "Primera columna\tSegunda columna";
  * Resultado: Muestra dos columnas de texto.


Ejemplo:

```
// Comilla simple
let texto1 = 'Me gusta \'CSS\'';
console.log(texto1); // Salida: Me gusta 'CSS'

// Comilla doble
let texto2 = "Me encanta \"HTML\"";
console.log(texto2); // Salida: Me encanta "HTML"

// Barra invertida
let texto3 = "Este es un ejemplo de una barra invertida: \\";
console.log(texto3); // Salida: Este es un ejemplo de una barra invertida: \

// Nueva línea
let texto4 = "Primera línea\nSegunda línea";
console.log(texto4); 
// Salida:
// Primera línea
// Segunda línea

// Tabulación
let texto5 = "Primera columna\tSegunda columna";
console.log(texto5); // Salida: Primera columna  Segunda columna
```


8\. Estructuras de control
--------------------------

Las estructuras de control permiten controlar el flujo de ejecución de un programa. Estas estructuras incluyen condicionales y bucles, que son fundamentales para la lógica y la iteración en el código.

En JavaScript, las llaves `{}` se utilizan para delimitar bloques de código dentro de las estructuras de control. **Estas llaves son opcionales cuando solo hay una instrucción dentro de la estructura.** Sin embargo, es una buena práctica usarlas siempre para garantizar la claridad y evitar errores de interpretación del código.


### 8.1. Condicionales (if, else if, else)

Los condicionales en JavaScript se utilizan para ejecutar diferentes bloques de código según una condición especificada. La sintaxis básica es la siguiente:

```
if (condición) {
  // Bloque de código a ejecutar si la condición es verdadera
} else if (otraCondición) {
  // Bloque de código a ejecutar si la primera condición es falsa y esta es verdadera
} else {
  // Bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
```


Como hemos comentado antes, también podría escribirse sin llaves en el caso de que solo exista una sola línea de código. Es importante tener en cuenta que esta forma de escribir estructuras de control puede llevar a errores de interpretación si no se tiene cuidado con la indentación y la legibilidad del código.

```
if (condition)
    console.log("La condición es verdadera");
else if (otherCondition)
    console.log("La otra condición es verdadera");
else
    console.log("Ninguna de las condiciones anteriores es verdadera");

```


Ejemplo: En el siguiente ejemplo, si hora es menor que 12, se imprimirá «Buenos días». Si hora está entre 12 (inclusive) y 18 (exclusivo), se imprimirá «Buenas tardes». De lo contrario, es decir, si hora es mayor o igual a 18, se imprimirá «Buenas noches».

```
let hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora >= 12 && hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```


### 8.2. Bucles (for, while, do-while)

Los bucles en JavaScript se utilizan para repetir la ejecución de un bloque de código mientras se cumpla una condición específica. Estas son las principales estructuras de bucles:

*   **for**: Se utiliza cuando se conoce el número de iteraciones que se realizarán.

```
  for (inicialización; condición; actualización) {
    // Bloque de código a repetir
  }
```


Ejemplo: En el siguiente ejemplo el bucle imprimirá los valores de `i` desde 0 hasta 4.

*   La inicialización `let i = 0` establece la variable `i` en 0 al comienzo del bucle.
*   La condición `i < 5` especifica que el bucle continuará mientras `i` sea menor que 5.
*   La actualización `i++` incrementa `i` en 1 después de cada iteración del bucle.

```
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
```

*   **while**: Se utiliza cuando no se sabe cuántas veces se repetirá el bloque de código.

```
  while (condición) {
    // Bloque de código a repetir
  }
```

Ejemplo: En este ejemplo el bucle imprimirá los valores del contador desde 0 hasta 4. Una vez que `contador` alcanza el valor de 5, la condición se vuelve falsa y el bucle se detiene.

*   La condición `contador < 5` especifica que el bucle continuará mientras `contador` sea menor que 5.
*   Dentro del bucle, se imprime el valor del contador.
*   Luego, se incrementa el contador en 1 en cada iteración del bucle utilizando `contador++`.

```
let contador = 0;

while (contador < 5) {
  console.log("El contador es: " + contador);
  contador++;
}
```


*   **do-while**: Similar a `while`, pero garantiza que el bloque de código se ejecutará al menos una vez antes de evaluar la condición.

```
  do {
    // Bloque de código a repetir
  } while (condición);
```


Ejemplo: En este ejemplo el bucle imprimirá los valores del contador desde 0 hasta 4, al igual que el bucle `while` anterior. La diferencia principal es que el bloque de código se ejecuta al menos una vez, incluso si la condición es falsa desde el principio.

*   El bloque de código dentro del `do` se ejecuta al menos una vez antes de que se evalúe la condición.
*   La condición `contador < 5` se evalúa después de cada iteración. Si es verdadera, el bucle se ejecutará nuevamente; de lo contrario, el bucle terminará.
*   Dentro del bucle, se imprime el valor actual del contador y luego se incrementa en 1.

```
let contador = 0;

do {
  console.log("El contador es: " + contador);
  contador++;
} while (contador < 5);
```


**Ejercicios resueltos:**

1.  Imprimir los números del 1 al 10 en la consola:

```
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```


2.  Imprimir los números pares del 1 al 20 en la consola:

```
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
```


3.  Calcular la suma de los primeros 100 números naturales:

```
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log("La suma de los primeros 100 números es:", suma);
```


4.  Imprimir la tabla de multiplicar del 5:

```
const numero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}
```


5.  Imprimir los elementos de un array:

```
const array = ["manzana", "banana", "cereza", "dátil"];
for (let i = 0; i < array.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + array[i]);
}
```


6\. Imprimir un patrón de asteriscos en forma de triángulo:

```
const altura = 5;
for (let i = 1; i <= altura; i++) {
  let patron = "";
  for (let j = altura; j >= i; j--) {
    patron += " ";
  }
  for (let k = 1; k <= i; k++) {
    patron += "* ";
  }
  console.log(patron);
}
```


7.  Calcular la suma de los números pares del 1 al 100:

```
let sumaPares = 0;
for (let i = 2; i <= 100; i += 2) {
  sumaPares += i;
}
console.log("La suma de los números pares del 1 al 100 es:", sumaPares);
```


8.  Imprimir los números del 10 al 1 en orden descendente:

```
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```


9.  Calcular el promedio de un array de números:

```
const numeros = [10, 20, 30, 40, 50];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
const promedio = suma / numeros.length;
console.log("El promedio de los números es:", promedio);
```


### 8.3. Interrupción de bucles (break, continue)

Aunque **el uso de `break` y `continue` en los bucles no lo recomendamos porque su uso excesivo o incorrecto puede hacer que el código sea difícil de entender y mantener.** Es importante conocerlo porque algunos desarrolladores lo usan en casos muy concretos.

Algunas razones por las cuales el uso excesivo de `break` y `continue` puede no ser recomendado son:

1.  **Legibilidad del código:** El uso excesivo de `break` y `continue` puede hacer que el código sea más difícil de leer y entender, especialmente para personas que no están familiarizadas con estas construcciones o para ti mismo cuando revisas el código después de un tiempo.
2.  **Complejidad del flujo de control:** El uso de `break` y `continue` puede introducir complejidad adicional al flujo de control del programa, lo que podría dificultar la comprensión de la lógica del código.
3.  **Potencial de errores:** Un uso excesivo de `break` y `continue` podría resultar en errores sutiles o comportamientos inesperados, especialmente en código más grande o complejo.
4.  **Alternativas más claras:** En algunos casos, existen alternativas más claras y legibles para lograr el mismo resultado que el uso de `break` y `continue`, como la reorganización de la lógica del bucle o el uso de otras construcciones de control de flujo.

Veamos los usos de break y continue:

*   **break**: Se utiliza para salir de un bucle antes de que se complete todas las iteraciones.
*   **continue**: Se utiliza para saltar una iteración específica del bucle y continuar con la siguiente.

Ejemplo: En este ejemplo, el primer bucle `for` se detiene cuando `i` es igual a 3 utilizando `break`, y el segundo bucle `for` omite la iteración cuando `j` es igual a 2 utilizando `continue`.

```
// Utilizamos break para salir del bucle cuando el contador sea igual a 3
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    console.log("El bucle se detiene en i =", i);
    break;
  }
}

console.log("\n");

// Utilizamos continue para omitir la iteración cuando el contador es igual a 2
for (let j = 0; j < 5; j++) {
  if (j == 2) {
    console.log("Se omite la iteración en j =", j);
    continue;
  }
  console.log("Iteración:", j);
}
```


### 7.4. Switch

La estructura de control switch se utiliza para tomar decisiones basadas en el valor de una expresión. La sintaxis básica es:

```
switch (expresión) {
  case valor1:
    // Bloque de código a ejecutar si la expresión es igual a valor1
    break;
  case valor2:
    // Bloque de código a ejecutar si la expresión es igual a valor2
    break;
  default:
    // Bloque de código a ejecutar si la expresión no coincide con ninguno de los valores
}
```


Ejemplo: En este ejemplo, la variable `numDia` representa el número del día de la semana que queremos determinar. La estructura switch evalúa el valor de `numDia` y ejecuta el bloque de código correspondiente al caso que coincida. En caso de que `numDia` no coincida con ningún caso, se ejecuta el bloque de código bajo la etiqueta `default`. En la consola, este código imprimirá: «El día correspondiente al número 3 es Miércoles».

```
let numDia = 3;
let dia;

switch (numDia) {
  case 1:
    dia = "Lunes";
    break;
  case 2:
    dia = "Martes";
    break;
  case 3:
    dia = "Miércoles";
    break;
  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case 6:
    dia = "Sábado";
    break;
  case 7:
    dia = "Domingo";
    break;
  default:
    dia = "Número de día inválido";
}

console.log("El día correspondiente al número " + numDia + " es " + dia);
```


9\. Funciones
-------------

Las funciones son bloques de código reutilizables que realizan una tarea específica. Se definen utilizando la palabra clave `function`, seguida del nombre de la función y un par de paréntesis `()`. Si la función toma parámetros, estos se especifican dentro de los paréntesis. Veamos un ejemplo de cómo se declara y se llama a una función:

```
// Declaración de la función
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Llamada a la función
greet("Andrea"); // Salida: Hello, Andrea!
```


### 9.1. Parámetros y argumentos

Los parámetros son variables utilizadas para almacenar valores que una función espera recibir cuando es invocada. Los argumentos son los valores reales pasados a la función cuando se llama. Puedes definir múltiples parámetros separándolos por comas.

Ejemplo:

```
// Declaración de la función con múltiples parámetros
function greet(firstName, lastName) {
  console.log(`¡Hola, ${firstName} ${lastName}!`);
}

// Llamado a la función con argumentos
greet("Andrea", "Lluch"); // Salida: ¡Hola, Andrea Lluch!
```


Ejemplo: En este ejemplo, la función `tablaDeMultiplicar` recibe un número como argumento y utiliza un bucle for para imprimir la tabla de multiplicar de ese número del 1 al 10. Luego, probamos la función con el número 6 e imprimimos la tabla de multiplicar en la consola.

```
// Función para imprimir la tabla de multiplicar de un número dado
function tablaDeMultiplicar(numero) {
  console.log("Tabla de multiplicar del " + numero + ":");

  // Usamos un bucle for para multiplicar el número dado por los números del 1 al 10
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}

// Probamos la función con un ejemplo
const numero = 6;
tablaDeMultiplicar(numero);
```


### 9.2. Retorno de valores

Las funciones en JavaScript pueden devolver valores utilizando la palabra clave `return`. Esto permite que la función calcule un valor y lo pase de vuelta al código que la llamó.

Ejemplo:

```
// Declaración de una función que devuelve un valor
function sum(a, b) {
  return a + b;
}

// Llamada a la función y asignación del resultado a una variable
let result = sum(5, 3);
console.log(result); // Salida: 8
```


### 9.3. Funciones anónimas y funciones de flecha (arrow functions)

Además de las funciones declarativas, JavaScript también admite funciones anónimas y funciones de flecha.

*   Las funciones anónimas son aquellas que no tienen nombre y se pueden asignar a variables o pasar como argumentos a otras funciones.
*   Las funciones de flecha son una forma más concisa de escribir funciones anónimas. Omiten la palabra clave `function`.

Las **funciones tradicionales** son más adecuadas cuando se necesita **reutilizar la misma función en múltiples lugares** del código, ya que pueden ser llamadas por su nombre desde cualquier parte del programa. Por otro lado, las **funciones anónimas** suelen ser más útiles cuando se necesitan funciones simples que solo **se utilizarán en un contexto específico**.

Ejemplos:

```
// Función anónima asignada a una variable
let greet = function(name) {
  console.log(`Hello, ${name}!`);
};

// Llamada a la función
greet("Andrea"); // Salida: Hello, Andrea!

// Función de flecha (arrow function)
let square = (x) => {
  return x * x;
};

// Llamada a la función
console.log(square(5)); // Salida: 25
```


10\. Arrays o arreglos
---------------------

Los arrays en JavaScript son estructuras de datos que permiten almacenar múltiples valores en una sola variable.

Un «**array**» o «**arreglo**» es una estructura de datos que almacena una colección ordenada de elementos en una sola variable. Un «**vector**» es simplemente un array unidimensional, mientras que una «**matriz**» se componen de arrays anidados, donde cada array interno representa una fila de la matriz y contiene elementos individuales.

### 10.1. Creación de arrays

Puedes crear un array en JavaScript de varias maneras:

```
// Declaración de un array vacío
let miArray = [];

// Declaración de un array con elementos
let numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];

// Declaración de un array con diferentes tipos de datos
let mezclado = [1, "dos", true];

// Declaración de una matriz (array bidimensional)
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```


### 10.2. Acceso a elementos

Puedes acceder a elementos individuales dentro de un array utilizando corchetes `[]` con el índice del elemento que deseas acceder. Los índices en JavaScript comienzan en 0.

```
let numeros = [10, 20, 30];
console.log(numeros[0]); // Salida: 10
console.log(numeros[2]); // Salida: 30
```


Ejemplo de acceso a una matriz en JavaScript: COm `matriz[1][2]` accede al elemento en la segunda fila (índice 1) y la tercera columna (índice 2), que es 6.

```
// Declaración de una matriz (array bidimensional)
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Acceso al elemento en la segunda fila y la tercera columna
let elemento = matriz[1][2];
console.log(elemento); // Output: 6
```


### 10.3. Modificación de elementos

Puedes modificar los elementos de un array asignando nuevos valores a posiciones específicas.

```
let colores = ["rojo", "verde", "azul"];
colores[1] = "amarillo";
console.log(colores); // Salida: ["rojo", "amarillo", "azul"]
```


### 10.4. Métodos de arrays

Los arrays en JavaScript vienen con una variedad de métodos integrados que facilitan la manipulación de sus elementos. Veamos algunos métodos comunes:

#### 10.4.1. push()

El método `push()` agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

```
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // Salida: [1, 2, 3, 4]
```


#### 10.4.2. pop()

El método `pop()` elimina el último elemento de un array y lo devuelve.

```
let numeros = [1, 2, 3];
let ultimo = numeros.pop();
console.log(ultimo); // Salida: 3
console.log(numeros); // Salida: [1, 2]
```


#### 10.4.3. splice()

El método `splice()` cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

```
let frutas = ["manzana", "banana", "cereza", "dátiles"];
frutas.splice(2, 1); // Elimina 1 elemento desde la posición 2
console.log(frutas); // Salida: ["manzana", "banana", "dátiles"]
```


11\. Métodos en JavaScript
--------------------------

Los métodos en JavaScript son funciones integradas que se aplican a objetos para realizar operaciones específicas. Veamos algunos métodos muy útiles agrupados por su función:


* Método: parseInt()
  * Descripción: Convierte una cadena en un número entero.
* Método: parseFloat()
  * Descripción: Convierte una cadena en un número decimal.
* Método: isNaN()
  * Descripción: Determina si un valor es NaN (Not a Number).
* Método: toFixed()
  * Descripción: Formatea un número utilizando notación de punto fijo con un número específico de dígitos a la derecha del punto decimal.
* Método: prompt()
  * Descripción: Muestra un cuadro de diálogo con un mensaje para que el usuario ingrese datos.
* Método: alert()
  * Descripción: Muestra un cuadro de diálogo con un mensaje de advertencia.
* Método: console.log()
  * Descripción: Muestra un mensaje en la consola del navegador o en la consola del sistema.
* Método: concat()
  * Descripción: Combina dos o más arrays y devuelve un nuevo array.
* Método: join()
  * Descripción: Une todos los elementos de un array en una cadena y devuelve esa cadena.
* Método: pop()
  * Descripción: Elimina el último elemento de un array y lo devuelve.
* Método: push()
  * Descripción: Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
* Método: splice()
  * Descripción: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
* Método: reverse()
  * Descripción: Invierte el orden de los elementos de un array.
* Método: sort()
  * Descripción: Ordena los elementos de un array localmente y devuelve el array ordenado.
* Método: forEach()
  * Descripción: Ejecuta una función por cada elemento presente en el array.
* Método: toString()
  * Descripción: Convierte un array a una cadena de texto y devuelve esta cadena.
* Método: toUpperCase()
  * Descripción: Devuelve la cadena de texto en mayúsculas.
* Método: toLowerCase()
  * Descripción: Devuelve la cadena de texto en minúsculas.
* Método: indexOf()
  * Descripción: Devuelve la posición de la primera ocurrencia de un valor especificado en una cadena.
* Método: lastIndexOf()
  * Descripción: Devuelve la posición de la última ocurrencia de un valor especificado en una cadena.
* Método: slice()
  * Descripción: Extrae una sección de una cadena y devuelve una nueva cadena.
* Método: replace()
  * Descripción: Reemplaza una parte de la cadena con otra.
* Método: split()
  * Descripción: Divide una cadena en un array de subcadenas.
* Método: trim()
  * Descripción: Elimina los espacios en blanco del principio y del final de una cadena.



