//Carga los datos ingresados
const loadTable = () => {
  let i = 0;
  let viewTable = "";

  viewTable += "<tr>";
  automoviles.forEach(
    (item) =>
      (viewTable +=
        "<tr>" +
        `<th>${(i += 1)}</th>` +
        `<td>${item.marca}</td>` +
        `<td>${item.tipo}</td>` +
        `<td>${item.fabricacion.pais}</td>` +
        `<td>${item.fabricacion.fecha}</td>` +
        `<td>${item.costo}</td>` +
        `<td>${item.estado}</td>` +
        "</tr>")
  );

  document.getElementById("datesCars").innerHTML = viewTable;
};
