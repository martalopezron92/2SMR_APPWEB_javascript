document.addEventListener("DOMContentLoaded", function(){

    /* Funciones */
    function capitalizar(texto){

        let espacio = false;
        let salida = "";
        
        for(let i = 0; i < texto.length; i++){
            if((i == 0) || (espacio == true && texto[i] != " ")){
                salida += texto[i].toUpperCase();
                espacio = false;
            }else if(texto[i] == " "){
                    espacio = true;
                    salida += texto[i];
            }else{
                salida += texto[i];
            }
        }

        return salida;

    }

    /* Llamada a la funcion*/
    console.log(capitalizar("hola mundo")) // "Hola Mundo"
    console.log(capitalizar("make    it    real")) // "Make It Real"
    console.log(capitalizar("")) // ""



});