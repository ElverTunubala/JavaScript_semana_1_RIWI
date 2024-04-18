var fondos = true

while (fondos) {

    const destino = prompt('Ingrese el destino de Viaje entre Mexico y otro pais');
    var presupuestoInicial = prompt('Ingrese el presu puesto inicial')
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

    var sumaGastos = gastos.alimentacion + gastos.valoTiquete + gastos.hospedaje;

    if (presupuestoInicial < sumaGastos) {
        fondos = true
        alert("no tienes fondos suficientes")
    } else {
        console.log("puedes realizar el viaje")
        var fondos = false
    }

}
alert("RESERVA REALIZADA CON EXITO")

var umbral = 100000
var gastoTotal = sumaGastos + umbral;

if (gastoTotal>=presupuestoInicial){
    alert("NO puedes incluir un articulo extra")

}else{
    let sobra = presupuestoInicial - gastoTotal
    alert("te quedan "+sobra+""+"para incluir un articulo extra")
}
