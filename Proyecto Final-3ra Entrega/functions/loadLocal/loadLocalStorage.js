//Cuando recargemos la pagina el array "automoviles" no tendrá ningun dato
//Pero en nuestro localStorage aun están los datos del array
//Si hay datos del array "automoviles" en el localStorage, procederá a instanciarse nuevamente al array
const loadLocal = () => {
  let objAuto = JSON.parse(localStorage.getItem("automoviles")) || [];

  if (objAuto.length > 0) {
    for (let i = 0; i < objAuto.length; i++) {
      let fabricacion = new Fabricacion(objAuto[i].fabricacion.pais, objAuto[i].fabricacion.fecha);
      //Instaciamos mediante un objeto de la clase "Auto" los datos del localStorage
      let auto = new Auto(objAuto[i].marca, objAuto[i].tipo, fabricacion, objAuto[i].costo, objAuto[i].estado);
      //se instancia los datos del localStorage al array "automoviles"
      automoviles.push(auto);
    }
  }
};
