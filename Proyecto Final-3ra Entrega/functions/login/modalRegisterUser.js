const modalRegisterUser = () => {
  let modal = `<div class="modal fade" id="registerUser" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light" id="exampleModalLabel">Register user</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="formNewCar">
          <div class="modal-body">
            <div class="mb-3">
              <label for="inputMarca" class="form-label">Names</label>
              <input class="form-control" id="inputNames"/>
            </div>
            <div class="mb-3">
              <label for="inputType" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="inputLastName" />
            </div>
            <div class="mb-3">
              <label for="inputCountry" class="form-label">Email</label>
              <input class="form-control" id="inputEmail"/>
            </div>
            <div class="mb-3">
              <label for="inputDate" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword" />
            </div>
            <button type="submit" class="btn btn-primary" id="send">Register</button>
        </div>
        </form>
      </div>
    </div>
    </div>`;

  document.getElementById("moduleRegisterUser").innerHTML = modal;
};
