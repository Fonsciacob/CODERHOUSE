function newAuto(e) {
  e.preventDefault();
  let marca = document.getElementById("inputMarca").value;
  let type = document.getElementById("inputModel").value;
  let country = document.getElementById("inputCountry").value;
  let date = document.getElementById("inputDate").value;
  let costo = document.getElementById("inputCosto").value;
  let state = document.getElementById("inputState").value;

  if (marca == "" || type == "" || country == "" || date == "" || costo == "" || state == "" || costo < 1000) {
    if (costo < 1000) {
      alert("Ingrese un costo mayor o igual a $1000");
    } else {
      alert("Ingesar Datos!");
    }
  } else {
    let objFabricacion = new Fabricacion(country, date);
    let objAuto = new Auto(marca, type, objFabricacion, costo, state);
    //Agregar el nuevo objeto al array "automoviles"
    automoviles.push(objAuto);
    //Ingresar array al local storage
    localStorage.setItem("automoviles", JSON.stringify(automoviles));
    //Ocultar modal
    $("#exampleModal").modal("hide");
    //Al enviar los datos los inputs volveran a los valores por default
    document.getElementById("inputMarca").value = "Audi";
    document.getElementById("inputModel").value = "";
    document.getElementById("inputCountry").value = "Afghanistan";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputCosto").value = "";
    document.getElementById("inputState").value = "Nuevo";
  }
  loadTable();
}
