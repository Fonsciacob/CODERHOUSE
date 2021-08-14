function updateAuto() {
  let id = document.getElementById("idCar").value;
  let marca = document.getElementById("upMarca").value;
  let type = document.getElementById("upModel").value;
  let country = document.getElementById("upCountry").value;
  let date = document.getElementById("upDate").value;
  let costo = document.getElementById("upCosto").value;
  let state = document.getElementById("upState").value;

  if (marca == "" || type == "" || country == "" || date == "" || costo == "" || state == "" || costo < 1000) {
    if (costo < 1000) {
      alert("Ingrese un costo mayor o igual a $1000");
    } else {
      alert("Ingesar Datos!");
    }
  } else {
    automoviles[id].marca = marca;
    automoviles[id].costo = costo;
    automoviles[id].estado = state;
    automoviles[id].tipo = type;
    automoviles[id].fabricacion.fecha = date;
    automoviles[id].fabricacion.pais = country;
    //Ingresar array al local storage
    localStorage.setItem("automoviles", JSON.stringify(automoviles));
    //Ocultar modal
    $("#updateModalVehicle").modal("hide");
  }
  loadTable();
}
