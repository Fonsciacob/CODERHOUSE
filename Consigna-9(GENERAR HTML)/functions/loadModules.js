const load = () => {
  let modal = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro Vehicular</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="formNewCar" onsubmit="inputDates(event)">
          <div class="mb-3">
            <label for="inputMarca" class="form-label">Marca</label>
            <input type="text" class="form-control" id="inputMarca" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="inputType" class="form-label">Tipo</label>
            <input type="text" class="form-control" id="inputType" />
          </div>
          <div class="mb-3">
            <label for="inputCountry" class="form-label">Pais</label>
            <input type="text" class="form-control" id="inputCountry" />
          </div>
          <div class="mb-3">
            <label for="inputDate" class="form-label">Fecha de fabricacion</label>
            <input type="text" class="form-control" id="inputDate" />
          </div>
          <div class="mb-3">
            <label for="inputCosto" class="form-label">Costo</label>
            <input type="text" class="form-control" id="inputCosto" />
          </div>
          <div class="mb-3">
            <label for="inputState" class="form-label">Estado</label>
            <input type="text" class="form-control" id="inputState" />
          </div>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
        </form>
      </div>
    </div>
  </div>
  </div>`;

  document.getElementById("moduleNewCar").innerHTML = modal;

  //Al abrir el modal los campos estarán vacíos
  document.getElementById("exampleModal").addEventListener("show.bs.modal", () => {
    document.getElementById("inputMarca").value = "";
    document.getElementById("inputType").value = "";
    document.getElementById("inputCountry").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputCosto").value = "";
    document.getElementById("inputState").value = "";
  });
};
