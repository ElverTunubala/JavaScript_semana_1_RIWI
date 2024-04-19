
let nivelEnergia=prompt("del 0 al 5 como te sientes de energia hoy?")
let clima = prompt("como esta el clima hoy, soleado, lluvioso?")
let cargaAcademica= prompt("tienes muchos trabajos SI O N0?")

// funcion para convertir los numeros ingresados a true o false

function Energia(nivelEnergia){

    if(nivelEnergia== "0" | nivelEnergia=="1" | nivelEnergia=="2" | nivelEnergia=="3" | nivelEnergia==""){
        var energia = false
    }
    else if(nivelEnergia== "4" | nivelEnergia=="5" ){
        var energia = true
    }else{
        alert("ingreso un numero no valido")
    }
    return energia
}
let energiaPersona = Energia(nivelEnergia)

// funcion para trabajar con el clima

function Clima(clima){

    if(clima=="" | clima=="lluvioso"){
        var climaDia = false
    }else{
        var climaDia = Boolean(clima)
    }
    return climaDia
}
let estadoclima= Clima(clima)

// funcion para trabajar con la carga academica

function trabajosUniversidad(cargaAcademica){
    if(cargaAcademica=="" | cargaAcademica=="no" | cargaAcademica=="NO"){
        var universidad = false
    }else{
        var universidad =Boolean(cargaAcademica)
    }
    return universidad
}
let tareas = trabajosUniversidad(cargaAcademica)

// llamado de funciones

if (energiaPersona==false | estadoclima==false){
    console.log("puedes tomarte un dia libre")

}else if(energiaPersona==true & estadoclima==true){
    console.log("puedes salir a correr")

}else if(tareas==false){
    console.log("no tienes trabajos pendientes")
}else if(tareas==true){
    console.log("tienes trabajos pendientes por hacer")
}else{
    console.log("recuerda cambiar de numero")
}





// let prueba = Boolean(nivelEnergia)

// if (prueba==false){
//     console.log("le recomiendo tomar un dia libre")

// }else{
//     console.log("LE RECOMIENDO TOMAR UN DIA LIBRE")
// }

// console.log(prueba)

// const falsey = [false, 0, -0, 0n, "", null, undefined, NaN];

// falsey.forEach((value) => {
//     console.log(`Value: ${value}, Type: ${typeof value}, Boolean: ${Boolean(value)}`);
// });

