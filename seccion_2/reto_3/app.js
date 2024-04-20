
// se Pedi información a Julian
const pesoOcupado= 5

let clima = prompt("Ingrese el pronóstico del clima (soleado, lluvioso, nublado):").toLowerCase();
let espacioDisponible = parseFloat(prompt("Ingrese el espacio disponible en su maleta de 1 a 10 en medida de volumen:"));
let pesoPermitido = parseFloat(prompt("Ingrese el límite de peso permitido para su equipaje (en kilogramos) del 5 al 10:"));

let articulos = [
    {
        nombre:"camara",
        peso:2,
    },
    {
        nombre:"gafas",
        peso:2,
    },
    {
        nombre:"libro",
        peso:3,
    },
    {
        nombre:"binoculares",
        peso:2,
    },
    {
        nombre:"protectorSolar",
        peso:1,
    },
    {
        nombre:"sombrilla",
        peso:1,
    },
    
]
let pesoDisponible = pesoPermitido - pesoOcupado
let suma = 0
let articulosLLevar = []

articulos.forEach(function(x){

    if(suma < pesoDisponible){
        if (x.peso<=pesoDisponible - suma){
            suma = suma + x.peso
            articulosLLevar.push(x.nombre)
        }
    }
});
// funcion que imprime la recomedacion

function recomedacion(r){
    console.log("deacuerdo al peso esta es mi recomendacion: "+ r)
}
//funcion articulos y su peso
function mapa(m){
    let mapa = m.map(function (x) {
        console.log(x.nombre+"=>"+x.peso)
    });
    return mapa
}

// Evaluar condiciones y tomar decisiones

if (clima === "soleado") {
    console.log("El clima es soleado. Necesitas llevar gafas de sol y protector solar.");
    recomedacion(articulosLLevar);
    console.log("articulos disponibles y su peso: "+ mapa(articulos))


    if (espacioDisponible >= 5 ) {
        console.log("También puedes considerar llevar una cámara para capturar fotos del paisaje.");
    }
} else if (clima === "lluvioso") {

    console.log("El clima es lluvioso. Deberías llevar un paraguas y un impermeable.");

    if (espacioDisponible >= 3 ) {
        console.log("Si tienes espacio y peso disponible, también puedes llevar un libro .");
    }

} else if (clima === "nublado") {

    console.log("Podrías llevar una chaqueta ligera por si acaso.");
    
    if (espacioDisponible >= 2 ) {
        console.log("Además, podrías considerar llevar un par de binoculares para observar aves o paisajes.");
    }
} else {
    console.log("El pronóstico del clima ingresado no es válido. Por favor, ingrese 'soleado', 'lluvioso' o 'nublado'.");
}