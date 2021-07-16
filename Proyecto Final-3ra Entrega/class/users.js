class User {
  constructor(cName, cApe, objCredentials) {
    this.name = cName;
    this.lastName = cApe;
    this.credentials = objCredentials;
  }
}

class Credentials {
  constructor(cEmail, cPass) {
    this.email = cEmail;
    this.password = cPass;
  }
}
