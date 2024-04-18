
let nivelEnergia=prompt("del 0 al 5 como te sientes de energia hoy?")
let clima = prompt("como esta el clima hoy, frio, soleado, lluvioso?")
let cargaAcademica= prompt("tienes muchos trabajos SI O N0?")

if(cargaAcademica=="no" | cargaAcademica=="NO"){
    cargaAcademica=false
    console.log("puedes hacer otras cosas"+cargaAcademica)
}else{
    console.log("ovio que es un true por que es string")
}

let prueba = Boolean(nivelEnergia)

if (prueba==false){
    console.log("le recomiendo tomar un dia libre")

}else if(nivelEnergia== "0" | nivelEnergia=="1" | nivelEnergia=="2" | nivelEnergia=="3"){
    console.log("LE RECOMIENDO TOMAR UN DIA LIBRE")
}

console.log(prueba)

// const falsey = [false, 0, -0, 0n, "", null, undefined, NaN];

// falsey.forEach((value) => {
//     console.log(`Value: ${value}, Type: ${typeof value}, Boolean: ${Boolean(value)}`);
// });

