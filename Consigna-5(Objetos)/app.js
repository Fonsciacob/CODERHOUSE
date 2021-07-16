class autos {
  constructor(cMarca, cTipo, cCosto, cNombre) {
    this.marca = cMarca;
    this.tipo = cTipo;
    this.costo = cCosto;
    this.nombre = cNombre;
  }

  //IGV (18%)
  calcularIgv() {
    return this.costo * (18 / 100);
  }

  //COSTO TOTAL CON IGV
  costoTotal() {
    return this.costo + this.calcularIgv();
  }
}

let spark = new autos("Chevrolet", "auto", 8990, "Spark Sedán");
spark.costoTotal();
