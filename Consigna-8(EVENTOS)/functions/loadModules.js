const load = () => {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", "./html/newCar.html", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("moduleNewCar").innerHTML = xhttp.responseText;
    }
  };
  xhttp.send();
};
