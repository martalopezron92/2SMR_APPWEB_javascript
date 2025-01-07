# Ejercicios de JavaScript Básico

## 1. Calculadora de gastos de viaje

Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de alojamiento, alimentación y entretenimiento.

*   Solicita al usuario que ingrese los gastos estimados para cada categoría.
*   Calcula el coste total sumando todos los gastos.
*   Muestra el coste total al usuario.
*   Ejemplo de entrada: Gastos de alojamiento: 200€, Gastos de alimentación: 150€, Gastos de entretenimiento: 100€.
*   Salida esperada: El coste total del viaje es 450€.


## 2. Calculadora edad canina

Crea un programa que convierta la edad de un perro a años humanos.

La forma común de estimar la edad canina es multiplicar la edad del perro por 7. Esto se basa en la idea de que un año de vida de un perro equivale aproximadamente a siete años de vida humana en términos de desarrollo y envejecimiento.

*   Solicita al usuario que indique la edad de su perro en años.
*   Calcula la edad del perro en años humanos multiplicando la edad del perro por 7.
*   Muestra la edad del perro en años humanos al usuario.
*   Ejemplo de entrada: Edad del perro: 5 años.
*   Salida esperada: La edad del perro en años humanos es 35 años.



## 3. Calculadora de IMC (Índice de Masa Corporal)

Crea un programa que calcule el IMC de una persona a partir de su peso y altura.

*   Solicita al usuario que inserte su peso en kilogramos y su altura en metros.
*   Calcula el IMC dividiendo el peso entre la altura al cuadrado.
*   Muestra el IMC calculado al usuario y su clasificación según la tabla de IMC.
*   Ejemplo de entrada: Peso: 70kg, Altura: 1.75m.
*   Salida esperada: IMC: 22.86, Clasificación: Normal.

El Índice de Masa Corporal (IMC) se calcula dividiendo el peso de una persona en kilogramos entre la altura en metros al cuadrado. ​El IMC proporciona una estimación de la grasa corporal de una persona y se utiliza comúnmente como un indicador de salud. Los rangos típicos de IMC son: Menor de 18.5: Bajo peso, 18.5 – 24.9: Peso normal, 25 – 29.9: Sobrepeso y 30 o más: Obesidad.


## 4. Calculadora de descuentos

Crea un programa que calcule el precio final de un producto después de aplicarle un descuento.

*   Solicita al usuario que inserte el precio original del producto.
*   Solicita al usuario que inserte el porcentaje de descuento a aplicar (por ejemplo, 10 para un descuento del 10%).
*   Utiliza una función para calcular el precio final después de aplicar el descuento.
*   Muestra el precio final al usuario.

Ejemplo de entrada:

Inserta el precio original del producto: 50  
Inserta el porcentaje de descuento a aplicar: 20

Salida esperada: El precio final del producto después de aplicar un descuento del 20% es: 40 euros.


## 5. Generador de números primos

Escribe un programa que solicite al usuario dos números y luego muestre todos los números primos que hay entre esos dos números, incluyendo los extremos.

Un número primo es un número natural mayor que 1 que solo es divisible por sí mismo y por 1. En otras palabras, un número primo tiene exactamente dos divisores: 1 y él mismo. Por ejemplo, 2, 3, 5, 7, 11 son algunos ejemplos de números primos, ya que no tienen otros divisores aparte de 1 y ellos mismos.

*   Solicita al usuario que ingrese dos números enteros.
*   Encuentra todos los números primos en el rango entre los dos números insertados, incluyendo esos dos números.
*   Ejemplo de entrada: Inserta el primer número: 10, Inserta el segundo número: 20.
*   Salida esperada: Los números primos entre 10 y 20 son: 11, 13, 17, 19.


## 6. Generador de secuencia Fibonacci

Crea un programa que genere los primeros N términos de la secuencia de Fibonacci, donde N es un número insertado por el usuario.

La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos números precedentes. Comienza con 0 y 1, y luego cada número subsiguiente es la suma de los dos números anteriores. La secuencia comienza así: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, y así sucesivamente.

*   Solicita al usuario que ingrese el número de términos de la secuencia Fibonacci que desea generar.
*   Utiliza una función para calcular la secuencia de Fibonacci.
*   Muestra los primeros N términos de la secuencia Fibonacci al usuario.
*   Ejemplo de entrada: Inserta el número de términos de la secuencia Fibonacci: 8.
*   Salida esperada: Los primeros 8 términos de la secuencia Fibonacci son: 0, 1, 1, 2, 3, 5, 8, 13.



## 7. Conversor de temperatura

Crea un programa que convierta una temperatura de grados Celsius a grados Fahrenheit o viceversa, según la elección del usuario.

Para convertir de Celsius a Fahrenheit: Multiplica la temperatura en grados Celsius por 9/5 y luego suma 32. La fórmula es: °F = (°C × 9/5) + 32. Para convertir de Fahrenheit a Celsius: Resta 32 de la temperatura en grados Fahrenheit y luego multiplica por 5/9. La fórmula es: °C = (°F – 32) × 5/9.

*   Solicita al usuario que elija el tipo de conversión: de Celsius a Fahrenheit o de Fahrenheit a Celsius.
*   Solicita al usuario que ingrese la temperatura que desea convertir.
*   Utiliza funciones para realizar las conversiones necesarias.
*   Muestra el resultado de la conversión al usuario.
*   Ejemplo de entrada: ¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius): 1, Inserta la temperatura en grados Celsius: 25
*   Salida esperada: 25 grados Celsius equivalen a 77 grados Fahrenheit.


## 8. Calcular factorial

Escribe un programa que calcule el factorial de un número entero no negativo ingresado por el usuario.

El factorial de un número entero positivo ( n ), denotado como ( n! ), es el producto de todos los enteros positivos desde 1 hasta ( n ). La fórmula para calcular el factorial es ( n! = n x (n-1) x (n-2) x … x 2 x 1 ). Por ejemplo, el factorial de 5 (( 5! )) se calcula como ( 5 x 4 x 3 x 2 x 1 = 120 ).

1.  Define una función llamada `calculateFactorial` que tome un parámetro `number` que represente el número del cual se calculará el factorial.
2.  Dentro de la función, utiliza un bucle `for` para calcular el factorial del número.
3.  Inicializa una variable `result` en 1, ya que el factorial de 0 y 1 es 1.
4.  Itera desde 1 hasta `number`, multiplicando cada número por `result` en cada iteración y almacenando el resultado en `result`.
5.  Devuelve `result` al final de la función.
6.  Pide al usuario que ingrese un número entero no negativo.
7.  Convierte la entrada del usuario a un número entero utilizando la función `parseInt`.
8.  Llama a la función `calculateFactorial` con el número ingresado por el usuario y muestra el resultado.


## 9. Area y perimetro de un circulo

3.1. Escribe un programa que solicite al usuario el radio de un círculo y luego calcule y muestre el área y el perímetro del círculo.

*   Solicita al usuario que ingrese el radio del círculo.
*   Define dos funciones: una para calcular el área del círculo y otra para calcular el perímetro del círculo.
*   Usa las fórmulas matemáticas apropiadas dentro de estas funciones para calcular el área (π \* radio^2) y el perímetro (2 \* π \* radio) del círculo.
*   Llama a estas funciones con el radio proporcionado por el usuario como argumento.
*   Muestra los resultados del área y el perímetro al usuario.

## 10. Base y exponente

Escribe una función llamada `calculatePower` que tome dos parámetros: `base` y `exponent`. Esta función debe calcular y devolver el resultado de elevar la base al exponente.

**Ejemplo:**

```
// Llamada a la función
let result = calculatePower(2, 3);
console.log(result); // Resultado esperado: 8
```


## 11. Numero máximo de una lista

Crea un programa que solicite al usuario ingresar una lista de números y luego encuentre el número más grande en esa lista.

*   Solicita al usuario que ingrese la cantidad de números que quiere introducir.
*   Solicita al usuario que introduzca cada número uno por uno.
*   Almacena estos números en un array.
*   Escribe una función llamada `findLargestNumber` que tome un array de números como entrada y devuelva el número más grande en el array.
*   Dentro de la función, itera a través del array usando un bucle `for` para encontrar el número más grande.
*   Muestra el número más grande encontrado al usuario.

Asegúrate de que el programa utilice arrays para almacenar los números y la función para encontrar el número más grande.

**Ejemplo:**

*   Ingresa la cantidad de números: 5
*   Ingresa el número 1: 10
*   Ingresa el número 2: 25
*   Ingresa el número 3: 7
*   Ingresa el número 4: 18
*   Ingresa el número 5: 12
*   El número más grande es: 25

## 12. Bucle for

*   Imprimir los números del 20 al 30 en la consola.
*   Imprimir los números pares del 30 al 50 en la consola.
*   Calcular la suma de los primeros 50 números naturales.
*   Imprimir la tabla de multiplicar del 8.
*   Imprimir los elementos de un array.
*   Imprimir un patrón de asteriscos en forma de triángulo, con altura 9.
*   Calcular la suma de los números pares del 1 al 50.
*   Imprimir los números del 30 al 20 en orden descendente.
*   Calcular el promedio de un array de números.

13\. Contraseña válida
---------------------

Escribir una función llamada `contrasenaValida` que reciba un string y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar `false`.

```
// escribe tu respuesta aquí

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false
```


14\. Calcular impuestos
-----------------------

Escribir una función llamada `calcularImpuestos` que reciba dos argumentos numéricos: `edad` e `ingresos`. Si `edad` es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar `ingresos` \* 40%. De lo contrario retornar 0.

```
// escribe tu respuesta aquí

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0
```


15\. IMC (ïndice de masa corporal)
---------------------------------

El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: `peso / altura^2`

Escribir una función llamada `bmi` que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

*   "Bajo de peso" si el BMI < 18.5
*   "Normal" si está entre 18.5 y 24.9
*   "Sobrepeso" si está entre 25 y 29.9
*   "Obeso" si es igual o mayor a 30

```
// escribe la función bmi aquí

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
```


16\. Imprimir un arreglo
------------------------

Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada elemento en una línea a parte:

```
// escribe tu respuesta aquí

// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo
```


17\. Número de Likes
-------------------

Escribe una función llamada `likes` que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

*   1400 se convierte en 1K
*   34,567 se convierte en 34K
*   7’456,345 se convierte en 7M.

Si el número es menor a 1000 se debe devolver el mismo número como un string.

```
// escribe tu respuesta aquí

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
```


18\. FizzBuzz
------------

Escribir una función llamada `fizzBuzz` que reciba un número y retorne un string de acuerdo a lo siguiente:

*   "fizz" si el número es múltiplo de 3.
*   "buzz" si el número es múltiplo de 5.
*   "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
*   Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

```
// escribe tu respuesta aquí

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
```


19\. Contar rango de números
---------------------------

Escribir una función llamada `contarRango` que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

**Nota:** Utiliza un bucle en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

```
// escribe tu respuesta aquí

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
```


20\. Sumar rango de números
--------------------------

Escribir una función llamada `sumarRango` que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

**Nota:** puedes asumir que el número inicial va a ser menor o igual que el número final.

```
// escribe tu respuesta aquí

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
```


21\. Número de aes (letra "a")
-----------------------------

Escribir una función llamada `numeroDeAes` que reciba un string y retorne el número de veces que aparece la letra "a":

```
// escribe tu respuesta aquí

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
```


22\. Número de caracteres
-------------------------

Escribir una función llamada `numeroDeCaracteres` que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

```
// escribe tu respuesta aquí

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4
```


23\. Sumar arreglo
------------------

Escribir una función llamada `sumarArreglo` que reciba un arreglo de números y retorne la suma de todos los elementos.

```
// escribe tu respuesta aquí

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
```


24\. Multiplicar arreglo
------------------------

Escribir una función llamada `multiplicarArreglo` que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

```
// escribe tu respuesta aquí

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1
```


25\. Remover ceros
------------------

Escribir una función llamada `removerCeros` que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

```
// escribe tu respuesta aquí

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
```


26\. Sumar arreglo entre el rango
---------------------------------

Escribir una función llamada `sumarArreglo` que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

**Nota:** puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

```
// escribe tu respuesta aquí

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0
```


27\. Transcribir ADN a ARN
--------------------------

Escribir una función llamada `transcribir` que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

*   G -> C
*   C -> G
*   T -> A
*   A -> U

```
// escribe tu función aquí

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
```


28\. Capitalizar palabra
------------------------

Escribir una función llamada `capitalizar` que reciba un string y capitalice la primera letra:

```
// escribe tu función aquí

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
```


29\. Capitalizar cada palabra
-----------------------------

Escribir una función llamada `capitalizar` que reciba un string y capitalice la primera letra **de cada palabra**:

```
// escribe tu función aquí

// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""
```


30\. Encontrar el número máximo
-------------------------------

Escribir una función llamada `max` que reciba un arreglo de números y retorne el número máximo:

**Nota:** Intentarlo hacer sin el método `Math.max` de JavaScript.

```
// escribe tu función aquí

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
```


31\. Encontrar el número mínimo
-------------------------------

Escribir una función llamada `min` que reciba un arreglo de números y retorne el número mínimo:

**Nota:** Intentarlo hacer sin el método `Math.min` de JavaScript.

```
// escribe tu función aquí

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2
```


32\. Generar contraseña
-----------------------

Escribir una función llamada `password` que reciba un string y retorne un nuevo string realizando los siguientes cambios:

*   Las mayúsculas se reemplazan por minúsculas.
*   Se eliminan los espacios en blanco.
*   Reemplaza el caracter “a” por “4”.
*   Reemplaza el caracter “e” por “3”.
*   Reemplaza el caracter “i” por “1”.
*   Reemplaza el carater “o” por “0”.

```
// escribe tu función aquí

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""
```


33\. Encontrar números pares en un arreglo
------------------------------------------

Escribir una función llamada `pares` que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

```
// escribe tu función aquí

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []
```


34\. Encontrar posiciones de números pares
------------------------------------------

Escribir una función llamada `posiciones` que reciba un arreglo de números y retorne un nuevo arreglo **con las posiciones** donde se encuentran números pares.

```
// escribe tu función aquí

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []
```


35\. Duplicar elementos de un arreglo
-------------------------------------

Escribir una función llamada `duplicar` que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

```
// escribe tu función aquí

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []
```


36\. Encontrar palabras que empiecen por "a"
--------------------------------------------

Escribir una función llamada `empiezanConA` que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

```
// escribe tu función aquí

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
```


37\. Encontrar palabras que terminan en "s"
-------------------------------------------

Escribir una función llamada `terminanConS` que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

```
// escribe tu función aquí

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []
```


38\. Imprimir una matriz
------------------------

Escribir una función llamada `imprimirMatriz` que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

```
// escribe tu función aquí

// código de prueba
console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```


39\. Traducir números a palabras
--------------------------------

Escribir una función llamada `numerosAPalabras` que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.

```
// escribe tu función aquí

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
```


40\. Traducir palabras a números
--------------------------------

Escribir una función llamada `palabrasANumeros` que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.

```
// escribe tu función aquí

// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]
```


41\. Número de asteriscos en un arreglo
---------------------------------------

Escribir una función llamada `numAsteriscos` que reciba un arreglo y retorne el número de asteriscos:

```
// escribe tu función aquí

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
```


42\. Número de asteriscos en una matriz
---------------------------------------

Escribir una función llamada `numAsteriscos` que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

```
// escribe tu función aquí

// código de prueba
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))
// 5
```


43\. Distancia entre dos strings
--------------------------------

Escribir una función llamada `distancia` que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

**Nota:** Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

```
// escribe tu función aquí

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
```
