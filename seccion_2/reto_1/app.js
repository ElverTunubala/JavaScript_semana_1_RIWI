
let nivelEnergia=prompt("del 0 al 5 como te sientes de energia hoy?")
let clima = prompt("como esta el clima hoy, frio, soleado, lluvioso?")
let cargaAcademica= prompt("tienes muchos trabajos?")

let prueba = Boolean(nivelEnergia)

if (prueba=="false"){
    console.log("le recomiendo tomar un dia libre")
}else{
    console.log("al menos entra al div")
}

console.log(prueba)

// const falsey = [false, 0, -0, 0n, "", null, undefined, NaN];

// falsey.forEach((value) => {
//     console.log(`Value: ${value}, Type: ${typeof value}, Boolean: ${Boolean(value)}`);
// });

