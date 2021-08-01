var brandCars = [];
const loadBrandCars = () => {
  fetch("./Json/brandCars.json")
    .then((archive) => {
      return archive.json();
    })
    .then((json) => {
      brandCars = json;
      if (localStorage.getItem("brandCars") == null) {
        localStorage.setItem("brandCars", JSON.stringify(json));
      }
      loadBrands();
      loadBrandsCarsUpdate();
    });
};
