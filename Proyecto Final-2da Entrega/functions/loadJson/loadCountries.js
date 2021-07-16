const loadDates = () => {
  //Carga Json de los paises
  let viewTable = "";
  let country = countries;

  country.forEach((item) => {
    viewTable += `<option>${item.name_en}</option>`;
  });

  document.getElementById("inputCountry").innerHTML = viewTable;

  //Carga Json de las marcas
  let viewMarca = "";
  let marcaAuto = marcas;

  marcaAuto.forEach((item) => {
    viewMarca += `<option>${item.nombre}</option>`;
  });

  document.getElementById("inputMarca").innerHTML = viewMarca;
};
