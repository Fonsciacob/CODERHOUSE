var users = [];

const inputDatesUser = document.getElementById("formNewUser");

inputDatesUser.onsubmit = (e) => {
  e.preventDefault();

  let name = $("#inputNames").val();
  let lastName = $("#inputLastName").val();
  let email = $("#inputEmailUser").val();
  let pass = $("#inputPassword").val();

  let objCredentials = new Credentials(email, pass);
  let objuser = new User(name, lastName, objCredentials);

  let verifyEmail = users.find((user) => user.credentials.email === email);

  if (name == "" || lastName == "" || email == "" || pass == "") {
    alert("Completar los campos requeridos!!");
  } else if (verifyEmail != undefined) {
    alert("Este Usuario ya se encuentra registrado");
  } else {
    users.push(objuser);
    //Ingresa el array "users" al local storage"
    localStorage.setItem("users", JSON.stringify(users));
    $("#registerUser").modal("hide");
    //Al enviar los datos los inputs volveran a los valores por default
    $("#inputNames").val("");
    $("#inputLastName").val("");
    $("#inputEmailUser").val("");
    $("#inputPassword").val("");
  }
};