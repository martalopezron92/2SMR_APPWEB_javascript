
/*----------------------- Funciones ---------------------------*/
function calculate(){

    /* Seleccionamos los valores que introduce el usuario en el formulario*/
    const alo_usr = document.querySelector("#alojamiento");
    const ali_usr = document.querySelector("#alimentacion");
    const oci_usr = document.querySelector("#ocio");

    if(alo_usr.value && ali_usr.value && oci_usr.value && alo_usr.value > 0 &&
        ali_usr.value > 0 && oci_usr.value > 0){

        /* Sumamos todos los valores introducidos por el usuario*/
        const suma = parseFloat(alo_usr.value) + parseFloat(ali_usr.value) + parseFloat(oci_usr.value);
        
        /* Creamos un parrafo con la suma total*/
        const tot = document.querySelector(".main__result");
        const p = document.createElement("p"); 
        p.textContent = suma;
        tot.appendChild(p);

    }else{

        /* Creamos un elemento que informe de no haber introducido los datos*/
        const msj = document.createElement("p");
        msj.textContent = "Los datos introducidos no son correctos";
        msj.classList.add("errorMessage");
        const formulario = document.querySelector(".main__data");
        formulario.parentNode.insertBefore(msj, formulario);

    }

    /* Añadimos una clase para identificar la accion en el toggle*/
    btn_clc.classList.add("toggleClass--active");
    btn_rst.classList.remove("toggleClass--active");

};

function reset(){

    /*Seleccionamos los elementos del DOM que queremos resetear*/
    const p = document.querySelector("p");
    const error = document.querySelector(".errorMessage");
    const inputs = document.querySelectorAll(".main__data__form__input");

    /* Reseteamos los valores de las etiquetas inputs*/
    inputs.forEach(input =>{
        input.value = "";
    })
    /* Reseteamos el valor de la etiqueta p, que contiene el valor de la suma total*/
    p.textContent = "";

    /* Si se ha generado un error, al resetear eliminamos el elemento*/
    if(error){
        error.remove();
    }

    /* Añadimos una clase para identificar la accion en el toggle y borramos la clase activa 
    del boton del calculo*/
    btn_rst.classList.add("toggleClass--active");
    btn_clc.classList.remove("toggleClass--active");
}

function toggleAction(elemento, funcionEjecutar){

    if(!elemento.classList.contains("toggleClass--active")){
        funcionEjecutar();
    }

}

/* ---------------------- Codigo principal ------------------------*/
const btn_clc = document.querySelector(".main__data__form__btn--calculate");
const btn_rst = document.querySelector(".main__data__form__btn--reset");    

btn_clc.addEventListener("click", function(){

    toggleAction(btn_clc, calculate);

});

btn_rst.addEventListener("click", function(){
    
    toggleAction(btn_rst,reset);

});



