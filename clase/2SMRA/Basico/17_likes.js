document.addEventListener("DOMContentLoaded", function(){

    /*Definicion de funciones*/
    function likes(num){

        let salida = ""
        if(isNaN(num)){
            alert("El dato introducido está vacio");
        }
        else if(num < 1000){
            salida += num;
        }else if (num >= 1000 && num < 1000000){
            let n = (num - (num%1000))/1000;
            salida += n + "K";
        }else{
            let n = (num - (num%1000000))/1000000;
            salida += n + "M"
        }

        return salida;
    }

    // Parte principal del código (main) -- Llamada de la funcion
    console.log(likes(983)) // "983"
    console.log(likes(1900)) // "1K"
    console.log(likes(54000)) // "54K"
    console.log(likes(120800)) // "120K"
    console.log(likes(25222444)) // "25M"


});