

document.addEventListener("DOMContentLoaded", function(){

    /*Declaración de la función*/
    function findLargestNumber(array){
        max = array[0];
        for(let i = 0; i<array.length; i++){
            if(max < array[i])
                max = array[i];
        }
        return max;
    }
    
    /*Datos de entrada y variables auxiliares*/
    const num = parseInt(prompt("Introduce la cantidad de numeros que quieres introducir"));
    let lista = [];
    
    /*Creación de array con datos de entrada del usuario*/
    for(let i = 0; i < num; i++){
        let n = parseInt(prompt("Introduce un numero entero"));
        lista.push(n);
    }
    
    /*Llamada a la función findLargestNumber*/
    alert("El numero más gran del array " + lista.join(",") + " es " + findLargestNumber(lista));
    
});



