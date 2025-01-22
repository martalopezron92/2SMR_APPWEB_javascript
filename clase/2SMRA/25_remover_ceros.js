document.addEventListener("DOMContentLoaded", function(){

    /* Funciones */
    function removerCeros(array){

        let lst_rem_0 = [];
        for(let i = 0; i < array.length; i++){
            if(array[i] != 0){
                lst_rem_0.push(array[i]);
            }
        }

        return lst_rem_0;

    }

    /* Llamada a la funcion*/
    console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
    console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
    console.log(removerCeros([0, 0, 0])) // []


});