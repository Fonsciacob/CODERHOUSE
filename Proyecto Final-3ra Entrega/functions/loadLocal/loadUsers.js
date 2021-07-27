const loadLocalUsers = () => {
  let objUsers = JSON.parse(localStorage.getItem("users")) || [];
  if (objUsers.length > 0) {
    for (let i = 0; i < objUsers.length; i++) {
      let objCredentials = new Credentials(objUsers[i].credentials.email, objUsers[i].credentials.password);
      //Instaciamos mediante un objeto de la clase "Auto" los datos del localStorage
      let objUser = new User(objUsers[i].name, objUsers[i].lastName, objCredentials);
      //se instancia los datos del localStorage al array "automoviles"
      users.push(objUser);
    }
  }
};
