const signInUser = () => {
  $("#loginUser").submit((e) => {
    e.preventDefault();
    let email = $("#inputEmail").val();
    let pass = $("#inputPass").val();

    let verify = users.find((users) => users.credentials.email === email && users.credentials.password === pass);

    if (verify != undefined) {
      window.location.href = "index.html";
    } else {
      alert("Usuario no encontrado");
    }
  });
};
