
let presupuestoDiario = parseFloat(prompt("Ingrese su presupuesto diario:"));
let costoComida = parseFloat(prompt("Ingrese el costo estimado de comer fuera:"));
let costoLibro = parseFloat(prompt("Ingrese el costo estimado de comprar un libro:"));
let objetivoAhorroDiario = parseFloat(prompt("Ingrese su objetivo de ahorro diario:"));

// Evaluacion de los gastos
let puedeComerFuera = presupuestoDiario >= costoComida;
let puedeComprarLibro = presupuestoDiario >= costoLibro;


if (costoComida<presupuestoDiario & costoComida<presupuestoDiario){
    var totalResta= presupuestoDiario - costoComida - costoLibro
    
}else if(costoComida>presupuestoDiario){
    var totalResta =presupuestoDiario - costoLibro
    
}else if(costoLibro > presupuestoDiario){
    var totalResta = presupuestoDiario - costoComida
}else{
    alert("datos incorrectos")
}

let puedeAhorrar = totalResta >= objetivoAhorroDiario;

// imprimir los resultados
if (puedeComerFuera && puedeComprarLibro && puedeAhorrar) {
    console.log("¡Puedes comer fuera y comprar un libro y tambien ahorrar!");

} else if (puedeComerFuera && puedeAhorrar) {
    console.log("Puedes comer fuera y tambien ahorrar");

} else if (puedeComprarLibro && puedeAhorrar) {
    console.log("Puedes comprar un libro un tambien ahorrar");

} else if (puedeComerFuera) {
    console.log("Puedes comer fuera, pero asegúrate de no pasarte de tu objetivo de ahorro.");

} else if (puedeComprarLibro) {
    console.log("Puedes comprar un libro, pero asegúrate de no pasarte de tu objetivo de ahorro.");

} else {
    console.log("Lo siento, no puedes  ni comer fuera, ni comprar un libro mientras alcanzas ese objetivo de ahorro.");
}