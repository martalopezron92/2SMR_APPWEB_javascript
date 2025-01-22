
document.addEventListener("DOMContentLoaded", function(){

    function numeroDeCaracteres(texto, caracter){

        let cont = 0;
        for(let i = 0; i < texto.length; i++){
            if(texto[i] == caracter){
                cont++;
            }
        }

        return cont;
    }

    // código de prueba
    console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
    console.log(numeroDeCaracteres("MMMMM", "m")) // 0
    console.log(numeroDeCaracteres("eeee", "e")) // 4

});