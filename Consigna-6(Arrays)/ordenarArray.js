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

let n = prompt("Ingrese la cantidad de autos a registrar");
let i = 0;

while (i < n) {
  i++;
  let marcaAuto = prompt(`Ingrese la marca del auto ${i}`);
  let tipoAuto = prompt(`Ingrese el tipo del auto ${i}`);
  let costoAuto = prompt(`Ingrese el costo del auto ${i}`);
  let nombreAuto = prompt(`Ingrese el nombre del auto ${i}`);

  if (nombreAuto == "") {
    alert("Complete los datos!");
  } else {
    automovil.push(new autos(marcaAuto, tipoAuto, costoAuto, nombreAuto));
  }
}
//ORDENAR AUTOMOVILES DE MENOR A MAYOR COSTO
automovil.sort((a, b) => a.costo - b.costo);
