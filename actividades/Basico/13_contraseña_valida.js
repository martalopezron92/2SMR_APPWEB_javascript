document.addEventListener("DOMContentLoaded", function(){

    function contrasenaValida(password){

        if(password == "2Fj(jjbFsuj" || password == "eoZiugBf&g9"){
            return true;
        }else{
            return false;
        }
    }

    console.log(contrasenaValida("2Fj(jjbFsuj")) // true
    console.log(contrasenaValida("eoZiugBf&g9")) // true
    console.log(contrasenaValida("hola")) // false
    console.log(contrasenaValida("")) 

});