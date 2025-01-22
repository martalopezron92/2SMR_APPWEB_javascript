
let tipo_conversion = "(1) Celsius a Farenheit, (2) Farenheit a Celsius";
let conversion = parseInt(prompt("Elige el tipo de conversion: " + tipo_conversion));
let cel_far = (x) => {return x*9/5 + 32;};
let far_cel = (x) =>{return (x - 32)*5/9;}

switch(conversion){
    case(1):
        const temp1 = parseFloat(prompt("Introduce una temperatura en grados celsius"));
        alert(temp1 + " grados celsius equivalen a " + cel_far(temp1) + " grados Farenheit");
        break;
    case(2):
        const temp2 = parseFloat(prompt("Introduce una temperatura en grados farenheit"));
        alert(temp2 + " grados farenheit equivalen a " + far_cel(temp2) + " grados celsius");
        break;
    default:
        alert("La opción elegida no está disponible");
        break;
}
    
