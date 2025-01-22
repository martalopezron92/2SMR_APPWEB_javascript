
let factorial = (x) =>{
    let n = 1;
    for(let i = 1; i <= x; i++){
        n = n*i;
    }
    return n;
};

let num = parseInt(prompt("Introduce un numero mayor que cero"));
while(num <= 0){
    num = parseInt(prompt("El numero introducido no es mayor que cero. Por favor introduce un numero mayor que cero"));
}
alert("El factorial de " + num + " es " + factorial(num));