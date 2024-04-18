
let fondos = true
while (fondos) {

    const destino = prompt('Ingrese el destino de Viaje entre Mexico y otro pais');
    let presupuestoInicial = prompt('Ingrese el presu puesto inicial')
    let numeroDias = prompt('Ingrese el numero de dias');

    if (destino == "Mexico" | destino == "mexico") {
        var gastos = {
            alimentacion: numeroDias * 50000,
            valoTiquete: 4000000,
            hospedaje: numeroDias * 100000
        };
    } else {
        var gastos = {
            alimentacion: numeroDias * 40000,
            valoTiquete: 3000000,
            hospedaje: numeroDias * 200000
        };

    }
    console.log(gastos)

    let sumaGastos = gastos.alimentacion + gastos.valoTiquete + gastos.hospedaje;

    if (presupuestoInicial < sumaGastos) {
        fondos = true
        alert("no tienes fondos suficientes")
    } else {
        console.log("puedes realizar el viaje")
        fondos = false
    }

}
alert("RESERVA REALIZADA CON EXITO")

