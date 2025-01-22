
/*Declaracion de funcion*/
function calcula_descuento(precio, descuento){
    let precio_final = precio*(1-descuento/100);
    alert("El precio final del producto despues de aplicar el descuento del " 
        + descuento + "% es: " + precio_final);
}

/*Parametros y datos de entrada*/
let precio_ori = parseFloat(prompt("Introduce el precio original del producto (euros)"));
let rebaja = parseFloat(prompt("Introduce el descuento a aplicar (en %)"));
calcula_descuento(precio_ori, rebaja); /*Llamamiento a la funcion*/