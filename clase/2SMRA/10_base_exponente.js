document.addEventListener("DOMContentLoaded", function(){

    function calculatePower(bas, exp){

        let pow = 1;
        for(let i = 0; i < exp; i++){
            pow = pow*bas;
        }
        return pow;

    }

    console.log(calculatePower(2,3));



});