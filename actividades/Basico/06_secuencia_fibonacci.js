/* Declaracion de la funcion que calcula los elementos de la sucesion de fibonacci*/
document.addEventListener("DOMContentLoaded", function(){

    function fibonacci(num_ele){

        let f0 = 0;
        let f1 = 1;
        let suc_fib = [f0, f1]
        let salida = "";
    
        for(let i = 0; i < num_ele - 2; i++){
            let fn = f1 + f0;
            suc_fib.push(fn);
            f0 = f1;
            f1 = fn;
        }
    
        // for(let i = 0; i < suc_fib.length; i++){
        //     if(i < suc_fib.length - 1){
        //         salida += suc_fib[i] + ", ";
        //     }else{
        //         salida += suc_fib[i];
        //     }
        // }
    
        alert("Los primeros " + num + " términos de la secuencia de Fibonacci son " + suc_fib.toString());
    }
    
    /* Parámetros de entrada*/
    let num = parseInt(prompt("Introduce el numero de elementos de la secuencia de Fibonacci que quieres generar"));
    fibonacci(num); /*Llamamos a la funcion*/

});

