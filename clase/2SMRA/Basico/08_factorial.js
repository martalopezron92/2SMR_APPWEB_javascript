document.addEventListener("DOMContentLoaded", function(){

    /*Definicion de una funcion*/
    function Factorial(num){

        let fac_num = 1;
        if(num > 0){
            for(let i = 1; i <= num; i++){
                fac_num = fac_num*i;
            }
            return fac_num;
        }else{
            return "El numero introducido no es positivo";
        } 

    }

    /*Parte principal - (main) -- Llamamos a la funcion*/
    const num_usr = parseInt(prompt("Introduce un numero positivo"));
    alert(Factorial(num_usr));


})