const ingresarDatos = () => {
  let cantidad = parseInt(prompt("Ingrese la cantidad de autos a registrar"));
  for (let i = 0; i < cantidad; i++) {
    //Clase auto
    let marcaAuto = prompt("Ingrese la marca del auto");
    if (marcaAuto == "") break;

    let tipoAuto = prompt("Ingrese el tipo de auto");
    if (tipoAuto == "") break;

    let costoAuto = parseInt(prompt("Ingrese el costo del auto"));
    if (costoAuto == "") break;

    let estadoAuto = prompt("Ingrese el estado del auto");
    if (estadoAuto == "") break;

    //Clase fabricación
    let paisAuto = prompt("Ingrese el pais de fabricacion del auto");
    if (paisAuto == "") break;

    let fechaAuto = prompt("Ingrese la fecha de fabricacion del auto");
    if (fechaAuto == "") break;

    let objFabricacion = new Fabricacion(paisAuto, fechaAuto);
    let objAuto = new Auto(marcaAuto, tipoAuto, objFabricacion, costoAuto, estadoAuto);

    automoviles.push(objAuto);
  }
};
