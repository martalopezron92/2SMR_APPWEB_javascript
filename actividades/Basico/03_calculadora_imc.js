/* Calculadora imc con datos introducidos por el usuario*/

const peso = parseFloat(prompt("Introduce tu peso en Kg"));
const altura = parseFloat(prompt("Introduce tu altura en metros"));
const imc = peso/(altura*altura);

const cortes = [[0, 18.5],[18.5, 25],[25,30], 30]
const clasif = ["Bajo Peso", "Peso Normal", "Sobrepeso", "Obesidad"]

console.log(cortes.length)

for(let i = 0; i < clasif.length; i++){
    if (cortes[i].length > 1){
        if (imc > cortes[i][0] && imc <= cortes[i][1]){
            alert("IMC: " + imc + ". Clasificacion: " + clasif[i])
        }
    }else{
        alert("IMC: " + imc + ". Clasificacion: " + clasif[i]) 
    }
}