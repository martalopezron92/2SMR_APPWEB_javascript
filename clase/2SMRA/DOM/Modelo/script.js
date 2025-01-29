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
    // titulo.textContent = "Hola mundo con JavaScript"; /*Modifico el valor del objeto*/
    // titulo.innerHTML = "<br> <br> <em> Hola mundo con JavaScript </em>";

    /* --------------- Creacion de funciones -----------------*/

    /* Ejercicio 1: Creacion de nuestro primer evento */
    function cambiar(){

        /*EJ1:Seleccionamos variable titulo y le modificamos el contenido del texto*/
        let titulo = document.querySelector("h1");
        titulo.textContent = "Hola mundo con JavaScript";

        /*EJ2:Seleccionamos variable titulo y le modificamos las propiedades de estilo (css)*/
        /* Forma 1: accediendo directamente a las propiedades*/
        // titulo.style.color ="red";
        // titulo.style.textAlign= "center";

        /* Forma 2: creando una clase nueva y añadiendola a nuestra etiqueta*/
        titulo.classList.add("main__title--change");
    }

    /* ------ Parte principal de mi codigo -----*/
    const btn_tit = document.querySelector(".header__btn--change");
    /* Ejercicio 1*/
    btn_tit.addEventListener("click", function(){

        const titulo = document.querySelector("h1");
        if(titulo.classList.contains("main__title--change")){
            titulo.classList.remove("main__title--change");
            titulo.textContent = "Hola mundo";
        }else{
            cambiar();
        }
        
    });



});