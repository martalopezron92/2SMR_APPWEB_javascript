
document.addEventListener("DOMContentLoaded", function(){

    function likes1(numero){
        
        let salida = "";
        if(numero / 1000 < 1)
            salida += numero;
        else if(numero / 1000000 < 1){
            let valor = (numero - (numero % 1000)) / 1000;
            salida = valor + "K";
        }else{
            let valor = (numero - (numero % 1000000)) / 1000000;
            salida = valor + "M";
        }

        return salida;
    }

    console.log(likes1(983)) // "983"
    console.log(likes1(1900)) // "1K"
    console.log(likes1(54000)) // "54K"
    console.log(likes1(120800)) // "120K"
    console.log(likes1(25222444)) // "25M"

    function likes2(numero){

        let salida;
        let array = String(numero).split('');/*Transformamos un numero en un array*/     

        if(array.length < 4){
            salida = array.join("");
        }else if(array.length < 7){
            salida = array.join("").slice(0, array.length - 3) + "K";
        }else{
            salida = array.join("").slice(0, array.length - 6) + "M";
        }

        return salida;


        /*Funcion de creacion propia para transformar numero en array*/
        function numToArray(num){
            let array = [];
            let div = num;
            while(div >= 1){
                let cifra = div % 10;
                div = (div - cifra)/10;
                array.push(cifra);
            }
            return array.reverse();
        }

    }

    console.log(likes2(983)) // "983"
    console.log(likes2(1900)) // "1K"
    console.log(likes2(54000)) // "54K"
    console.log(likes2(120800)) // "120K"
    console.log(likes2(25222444)) // "25M"
});