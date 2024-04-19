
// Pedir información a Julian
let clima = prompt("Ingrese el pronóstico del clima (soleado, lluvioso, nublado):").toLowerCase();
let espacioDisponible = parseFloat(prompt("Ingrese el espacio disponible en su maleta:"));
let pesoPermitido = parseFloat(prompt("Ingrese el límite de peso permitido para su equipaje (en kilogramos):"));

// Evaluar condiciones y tomar decisiones

if (clima === "soleado") {
    console.log("El clima es soleado. Puedes llevar gafas de sol y protector solar.");

    if (espacioDisponible >= 5 && pesoPermitido >= 1) {
        console.log("También puedes considerar llevar una cámara para capturar fotos del paisaje.");
    }
} else if (clima === "lluvioso") {

    console.log("El clima es lluvioso. Deberías llevar un paraguas y un impermeable.");

    if (espacioDisponible >= 3 && pesoPermitido >= 0.5) {
        console.log("Si tienes espacio y peso disponible, también puedes llevar un libro para leer en interiores.");
    }
} else if (clima === "nublado") {

    console.log("El clima es nublado. Podrías llevar una chaqueta ligera por si acaso.");
    
    if (espacioDisponible >= 2 && pesoPermitido >= 0.3) {
        console.log("Además, podrías considerar llevar un par de binoculares para observar aves o paisajes.");
    }
} else {
    console.log("El pronóstico del clima ingresado no es válido. Por favor, ingrese 'soleado', 'lluvioso' o 'nublado'.");
}