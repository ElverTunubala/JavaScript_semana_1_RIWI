
const presupuesto = parseFloat(prompt('Ingrese el presupuesto de viaje'));
alert('a continuacion puedes añadir los souvenir')

let souvenir =[]
let fondos = "seguir"

while (fondos != "salir") {

    const nombre = prompt('Ingrese el nombre del souvenir');
    let costo = parseFloat(prompt('Ingrese el costo'))
    let disponibilidad = prompt('disponible si o no?');

    if(disponibilidad=="si"){
        disponibilidad=true
    }else{
        disponibilidad=false
    }

    let recuerdo = {
        nombre: nombre,
        costo: costo,
        disponibilidad: disponibilidad
    };
    
    if(typeof(nombre)=="string" & typeof(disponibilidad)== "boolean" & typeof(costo)=="number"){
        souvenir.push(recuerdo)
        alert("verificacion de datos realizada con exito")
    }else{
        alert("no son los datos adecuados")}

    fondos = prompt('ingrese salir o siga añadiendo')

}
console.log(souvenir)

souvenir.map(function(x){
    console.log(x.costo+"=>"+x.disponibilidad)
});
