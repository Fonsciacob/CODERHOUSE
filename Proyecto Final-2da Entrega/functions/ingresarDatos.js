var automoviles = [];

const newAuto = () => {
  const inputDates = document.getElementById("formNewCar");

  const container = new bootstrap.Modal(document.getElementById("exampleModal"));

  inputDates.onsubmit = (e) => {
    e.preventDefault();
    let marca = $("#inputMarca").val();
    let type = $("#inputModel").val();
    let country = $("#inputCountry").val();
    let date = $("#inputDate").val();
    let costo = $("#inputCosto").val();
    let state = $("#inputState").val();

    if (marca == "" || type == "" || country == "" || date == "" || costo == "" || state == "") {
      alert("Ingesar Datos!");
    } else {
      let objFabricacion = new Fabricacion(country, date);
      let objAuto = new Auto(marca, type, objFabricacion, costo, state);
      //Agregar el nuevo objeto al array "automoviles"
      automoviles.push(objAuto);
      //Ingresar array al local storage
      localStorage.setItem("automoviles", JSON.stringify(automoviles));
      //Ocultar modal
      container.hide();
      //Al enviar los datos los inputs volveran a los valores por default
      document.getElementById("inputMarca").value = "Audi";
      document.getElementById("inputModel").value = "";
      document.getElementById("inputCountry").value = "Afghanistan";
      document.getElementById("inputDate").value = "";
      document.getElementById("inputCosto").value = "";
      document.getElementById("inputState").value = "Nuevo";
    }
    loadTable();
  };
};
