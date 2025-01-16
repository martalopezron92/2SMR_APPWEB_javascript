/* Objetivo: a partir de los datos introducidos por el usuario, crear una calculadora de gastos*/

/* Datos de entrada del usuario*/
const gastos_alojamiento = parseFloat(prompt("Introduce los gastos de alojamiento de tu viaje"));
const gastos_alimentacion = parseFloat(prompt("Introduce los gastos de alimentación de tu viaje"));
const gastos_entretenimiento = parseFloat(prompt("Introduce los gastos de entretenimiento de tu viaje"));

/*Calculamos la suma de los gastos*/
const suma = gastos_alimentacion + gastos_alojamiento + gastos_entretenimiento;

/*Mostramos información al usuario*/
alert("El coste total del viaje es " + suma);