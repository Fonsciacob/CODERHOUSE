class autos {
  constructor(cMarca, cTipo, cCosto, cNombre) {
    this.marca = cMarca;
    this.tipo = cTipo;
    this.costo = cCosto;
    this.nombre = cNombre;
  }

  //IGV (18%)
  calcularIgv() {
    return this.costo * (18 / 100);
  }

  //COSTO TOTAL CON IGV
  costoTotal() {
    return this.costo + this.calcularIgv();
  }
}

const automovil = [];

let marcaAuto = prompt("Ingrese la marca del auto");
let tipoAuto = prompt("Ingrese el tipo del auto");
let costoAuto = prompt("Ingrese el costo del auto");
let nombreAuto = prompt("Ingrese el nombre del auto");

if (marcaAuto == "" || tipoAuto == "" || costoAuto == "" || nombreAuto == "") {
  alert("Complete los datos!");
} else {
  automovil.push(new autos(marcaAuto, tipoAuto, costoAuto, nombreAuto));
}
