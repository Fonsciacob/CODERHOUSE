//Modal Register Vehicle
const loadCountryCars = () => {
  let viewCountries = "";
  let view = "";
  let countriesList = JSON.parse(localStorage.getItem("countries"));

  fetch("./html/registerVehicle.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      view = html;
      countriesList.forEach((c) => {
        viewCountries += `<option>${c.name}</option>`;
      });
      $("#modalRegisterVehicle").html(view);
      $("#inputCountry").html(viewCountries);
    });
};

const loadBrands = () => {
  let viewBrand = "";
  let view = "";
  let brandCarsList = JSON.parse(localStorage.getItem("brandCars"));

  fetch("./html/registerVehicle.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      view = html;
      brandCarsList.forEach((b) => {
        viewBrand += `<option>${b.nombre}</option>`;
      });
      $("#inputMarca").html(viewBrand);
    });
};

//Modal Update Vehicle

const loadCountryCarsUpdate = () => {
  let viewCountries = "";
  let view = "";
  let countriesList = JSON.parse(localStorage.getItem("countries"));

  fetch("./html/updateVehicle.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      view = html;
      countriesList.forEach((c) => {
        viewCountries += `<option>${c.name}</option>`;
      });
      $("#modalUpdateVehicle").html(view);
      $("#upCountry").html(viewCountries);
    });
};

const loadBrandsCarsUpdate = () => {
  let viewBrand = "";
  let view = "";
  let brandCarsList = JSON.parse(localStorage.getItem("brandCars"));

  fetch("./html/updateVehicle.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      view = html;
      brandCarsList.forEach((b) => {
        viewBrand += `<option>${b.nombre}</option>`;
      });
      $("#upMarca").html(viewBrand);
    });
};
