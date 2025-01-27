document.addEventListener("DOMContentLoaded", function(){

    /* Seleccionar un unico elemento */
    console.log(document.getElementsByTagName("h1")); /*Seleccionando por etiqueta*/
    console.log(document.getElementsByClassName("main__title")); /*Seleccionando por clase*/
    console.log(document.querySelector("h1")); /*Seleccionando por etiqueta*/
    console.log(document.querySelector(".main__title")); /*Seleccionando por clase*/

    /* Seleccionar multiples elementos*/
    console.log(document.querySelectorAll(".header__btn"));
    console.log(document.querySelector(".header__btn"));
    console.log(document.getElementsByClassName("header__btn"));

    /* Seleccionar titulo y modificar su valor*/
    let titulo = document.querySelector("h1");
    console.log(titulo); /*Devuelve el objeto*/
    console.log(titulo.textContent); /*Devuelve el valor del objeto*/
    console.log(titulo.innerHTML); /*Devuelve el valor del objeto*/
    titulo.textContent = "Hola mundo con JavaScript"; /*Modifico el valor del objeto*/


});