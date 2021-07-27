var automoviles = [];
//Cargar Json de Paises
loadCountries();
//Cargar Json de Marcas
loadBrandCars();
//Carga los datos del localStorage y se inserta al array "automoviles"
loadLocal();
//Carga los datos del localStorage y lo muestra en una tabla
loadTable();
