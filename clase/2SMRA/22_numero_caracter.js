document.addEventListener("DOMContentLoaded", function(){

    /* Funciones */
    function numeroDeCaracteres(string, char){

        let cont = 0;
        for(let i = 0; i < string.length; i++){
            if(string[i] == char){
                cont++; /* cont = cont + 1*/
            }
        }
        return cont;

    }

    /* Llamada a la funcion */
    console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
    console.log(numeroDeCaracteres("MMMMM", "m")) // 0
    console.log(numeroDeCaracteres("eeee", "e")) // 4


})