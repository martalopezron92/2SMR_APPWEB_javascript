 /* Objetivo: Crear una calculadora que aplique un descuento a un producto*/
document.addEventListener("DOMContentLoaded", function(){

    /*Declaración o definición de funciones*/
    function DescuentoPrecio(pre_ori, dct){
        return pre_ori*(1 - dct/100);
    }

    /*Codigo principal (main) -- Llamada de la funcion*/
    const pre_usr = parseFloat(prompt("Introduce el precio original"));
    const dct_usr = parseFloat(prompt("Introduce el descuento a aplicar"));

    alert("El precio final del producto después de aplicar un descuento del " 
        + dct_usr + "% es: " + DescuentoPrecio(pre_usr, dct_usr) + " euros.");

});
    