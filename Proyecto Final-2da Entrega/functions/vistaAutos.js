//Carga los datos ingresados
const loadTable = () => {
  let i = 0;
  let viewTable = "";

  let objAuto = JSON.parse(localStorage.getItem("automoviles"));
  objAuto.forEach(
    (item) =>
      (viewTable +=
        "<tr>" +
        `<th class="align-middle text-center">${(i += 1)}</th>` +
        `<td class="align-middle text-center">${item.marca}</td>` +
        `<td class="align-middle text-center">${item.tipo}</td>` +
        `<td class="align-middle text-center">${item.fabricacion.pais}</td>` +
        `<td class="align-middle text-center">${item.fabricacion.fecha}</td>` +
        `<td class="align-middle text-center">$${item.costo}</td>` +
        `<td class="align-middle text-center">${item.estado}</td>` +
        `<td>
          <button type="button" class="btn btn-primary">Upgrade</button>
          <button type="button" class="btn btn-danger delete">Delete</button>
        </td>` +
        "</tr>")
  );

  document.getElementById("datesCars").innerHTML = viewTable;

  let btnDelete = document.querySelectorAll(".delete");

  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].onclick = () => {
      automoviles.splice(i, 1);
      localStorage.setItem("automoviles", JSON.stringify(automoviles));
      loadTable();
    };
  }
};
