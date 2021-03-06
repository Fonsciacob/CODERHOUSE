const load = () => {
  let modal = `<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-light" id="exampleModalLabel">Register vehicle</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form id="formNewCar">
        <div class="modal-body">
          <div class="mb-3">
            <label for="inputMarca" class="form-label">Car brand</label>
            <select class="form-select" id="inputMarca"></select>
          </div>
          <div class="mb-3">
            <label for="inputType" class="form-label">Model</label>
            <input type="text" class="form-control" id="inputModel" />
          </div>
          <div class="mb-3">
            <label for="inputCountry" class="form-label">Country</label>
            <select class="form-select" id="inputCountry"></select>
          </div>
          <div class="mb-3">
            <label for="inputDate" class="form-label">Date of production (dd/mm/aaaa)</label>
            <input type="date" class="form-control" id="inputDate" />
          </div>
          <div class="mb-3">
            <label for="inputCosto" class="form-label">Price</label>
            <input type="number" class="form-control" id="inputCosto" min=1000 />
          </div>
          <div class="mb-3">
            <label for="inputState" class="form-label">State</label>
            <select class="form-control" id="inputState">
              <option>New</option>
              <option>Used</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary" id="send">Register</button>
      </div>
      </form>
    </div>
  </div>
  </div>`;

  $("#moduleNewCar").html(modal);
};
