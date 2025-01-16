const peso = parseFloat(prompt("Introduzca su peso en kg: "));
const altura = parseFloat(prompt("Introduzca su altura en metros: "));

const IMC = peso/(altura^2);

if (IMC < 24.9)
    alert("Su indice de masa corporal es " + IMC.toFixed(2) + ".  Clasificacion: Bajo Peso");
    
else if (IMC > 24.9 && IMC < 29.9)
    alert("Su indice de masa corporal es " + IMC.toFixed(2) + ".  Clasificacion: Normal");
else
    alert("Su indice de masa corporal es " + IMC.toFixed(2) + ".  Clasificacion: Obeso");