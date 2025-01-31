
/*--------------- Pruebas iniciales de JavaScript ------------*/
/* Seleccionar un unico elemento */
// console.log(document.getElementsByTagName("h1")); /*Seleccionando por etiqueta*/
// console.log(document.getElementsByClassName("main__title")); /*Seleccionando por clase*/
// console.log(document.querySelector("h1")); /*Seleccionando por etiqueta*/
// console.log(document.querySelector(".main__title")); /*Seleccionando por clase*/

// /* Seleccionar multiples elementos*/
// console.log(document.querySelectorAll(".header__btn"));
// console.log(document.querySelector(".header__btn"));
// console.log(document.getElementsByClassName("header__btn"));

// /* Seleccionar titulo y modificar su valor*/
// let titulo = document.querySelector("h1");
// console.log(titulo); /*Devuelve el objeto*/
// console.log(titulo.textContent); /*Devuelve el valor del objeto*/
// console.log(titulo.innerHTML); /*Devuelve el valor del objeto*/
// // titulo.textContent = "Hola mundo con JavaScript"; /*Modifico el valor del objeto*/
// // titulo.innerHTML = "<br> <br> <em> Hola mundo con JavaScript </em>";

/* --------------- Creacion de funciones -----------------*/

/* Ejercicio 1: Creacion de nuestro primer evento */
function cambiar(){

    /*EJ1:Seleccionamos variable titulo y le modificamos el contenido del texto*/
    let titulo = document.querySelector("h1");
    if(titulo.textContent == "Hola mundo con JavaScript"){
        titulo.textContent = "Hola mundo"; 
    }else{
        titulo.textContent = "Hola mundo con JavaScript";
    }
    
    /*EJ2:Seleccionamos variable titulo y le modificamos las propiedades de estilo (css)*/
    /* Forma 1: accediendo directamente a las propiedades*/
    // titulo.style.color ="red";
    // titulo.style.textAlign= "center";

    /* Forma 2: creando una clase nueva y añadiendola a nuestra etiqueta*/
    titulo.classList.toggle("main__title--change");
}


/*Ejercicio 3: Creacion de un nuevo elemento en nuestro html de manera dinamica*/
function creaDiv(){

    if(!document.querySelector("div")){
        let div = document.createElement("div"); //Creo el elemento
        div.textContent = "Javascript permite crear páginas dinámicas"; //Modifico el contenido
        div.classList.add("texto"); //Añadimos el estilo (clase de css)

        // Posicionamos nuestro nuevo elemento dentro de nuestro documento
        // Lo ponemos al final de nuestro main
        // const main = document.querySelector("main");
        // main.appendChild(div);

        // Lo ponemos detras del titulo principal
        const titulo = document.querySelector("h1");
        titulo.parentNode.insertBefore(div, titulo.nextSibling);
    }else{
        borrar();
    }

}

/* Ejercicio 4: Eliminacion de un elemento de html de manera dinamica*/
function borrar(){

    const new_ele = document.querySelector("div");
    if(new_ele){
        new_ele.remove();
    }

}



/* ------ Parte principal de mi codigo (Eventos) -----*/
const btn_tit = document.querySelector(".header__btn--change");
const btn_blq = document.querySelector(".header__btn--create");
const btn_rmv = document.querySelector(".header__btn--remove");


/* Ejercicio 1 y 2*/
btn_tit.addEventListener("click", function(){

    const titulo = document.querySelector("h1");
    // Otra forma alternativa de hacer un toggle manual
    // if(titulo.classList.contains("main__title--change")){
    //     titulo.classList.remove("main__title--change");
    //     titulo.textContent = "Hola mundo";
    // }else{
    //     cambiar();
    // }

    /*Modificamos el contenido y el estilo del titulo llamando a la funcion cambiar*/
    cambiar();
    /*Modificando el estilo del boton al pulsar click*/
    this.classList.toggle("header__btn--click");

});

/* Ejercicio 3*/
btn_blq.addEventListener("click", function(){
    /* Creamos un nuevo elemento en html llamando a la funcion creaDiv*/
    creaDiv();
    /*Modificando el estilo del boton al pulsar click*/
    this.classList.toggle("header__btn--click");

    /* Establecemos una relacion entre los botones de crear bloque y borrar bloque*/
    /* Si el boton de borrar esta activo al pulsaar el boton de crear, cambiamos su color*/
    if(btn_rmv.classList.contains("header__btn--click")){
        btn_rmv.classList.remove("header__btn--click");
    }
});

/*Ejercicio 4*/
btn_rmv.addEventListener("click", function(){

    /* Borramos el bloque div (si existe) llamando a la funcion borrar*/
    borrar();
    
    /* Marcamos en rojo el boton de borrar bloque. Se mantendrá seleccionado hasta que no se 
    marque el boton de crear bloque de nuevo*/
    this.classList.add("header__btn--click");

    /* Establecemos una relacion entre los botones de crear bloque y borrar bloque*/
    /* Si el boton de crear bloque esta activo al pulsaar el boton de borrar, cambiamos su color*/
    if(btn_blq.classList.contains("header__btn--click")){
        btn_blq.classList.remove("header__btn--click");
    }
})



