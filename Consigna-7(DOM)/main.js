var automoviles = [];

ingresarDatos();

//IMPRIMIR DATOS AL DOM
var viewAutos = "";

viewAutos += `<ul>`;
automoviles.forEach((item) => (viewAutos += `<li>${item.marca}</li>`));
viewAutos += `</ul>`;

document.getElementById("dates").innerHTML = viewAutos;
