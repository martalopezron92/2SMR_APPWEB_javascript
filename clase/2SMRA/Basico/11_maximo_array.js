
document.addEventListener("DOMContentLoaded", function(){

    /* Definimos las funciones */
    function findLargestNumber(array){

        let max = array[0];
        for(let i = 0; i < array.length; i = i + 1){
            if (array[i] > max){
                max = array[i];
            }
        }

        return max;
    }

    /* Parte principal -- Llamada de la funcion*/
    const num_ele_usr = parseInt(prompt("¿Cuantos elementos vas a introducir en el array?"));
    let lst_usr = [];

    for(let i = 0; i < num_ele_usr; i++){
        const num_usr = parseFloat(prompt("Introduce un numero"));
        lst_usr.push(num_usr)
    }

    alert("El numero maximo de la lista " + lst_usr + " es " + findLargestNumber(lst_usr))


});