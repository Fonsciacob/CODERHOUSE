var automoviles = [];
const inputDates = (e) => {
  e.preventDefault();
  let marca = document.getElementById("inputMarca").value;
  let type = document.getElementById("inputType").value;
  let country = document.getElementById("inputCountry").value;
  let date = document.getElementById("inputDate").value;
  let costo = document.getElementById("inputCosto").value;
  let state = document.getElementById("inputState").value;

  if (marca == "" || type == "" || country == "" || date == "" || costo == "" || state == "") {
    alert("Ingesar Datos!");
  } else {
    let objFabricacion = new Fabricacion(country, date);
    let objAuto = new Auto(marca, type, objFabricacion, costo, state);
    automoviles.push(objAuto);
  }

  loadTable();
};
