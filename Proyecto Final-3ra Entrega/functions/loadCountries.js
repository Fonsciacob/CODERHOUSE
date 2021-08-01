var countries = [];
const loadCountries = () => {
  fetch("./Json/countries.json")
    .then((archive) => {
      return archive.json();
    })
    .then((json) => {
      countries = json;
      if (localStorage.getItem("countries") == null) {
        localStorage.setItem("countries", JSON.stringify(json));
      }
      loadCountryCars();
      loadCountryCarsUpdate();
    });
};
