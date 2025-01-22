/*Declaracion de funciones*/
function es_primo(numero){
    let primo = true;
    for(let i = 2; i < numero/2; i++){
        if (numero % i == 0){
            primo = false;
            break;
        }
    }
    return primo;
}

/*Entrada de parametros y llamamiento de la funcion*/
let num_in = parseInt(prompt("Introduce un numero"));
let num_out = parseInt(prompt("Introduce otro numero"));
let array_primos = [];
let num_primos = "";

if (num_in > num_out){
    let mayor = num_in;
    num_in = num_out;
    num_out = mayor;
}

for(let i = num_in; i < num_out + 1; i++){
    if(es_primo(i)){ /*Llamamiento de la funcion*/
        array_primos.push(i);
    }
}

for(let i = 0; i < array_primos.length; i++){
    if (i < array_primos.length - 1) num_primos += array_primos[i] + ", ";
    else num_primos += array_primos[i];
}

/*Mensaje de salida*/
alert("Los numeros primos entre " + num_in + " y " + num_out + " son: " + num_primos);