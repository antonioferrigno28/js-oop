class Veicolo {
  brand;
  year;
  color;

  constructor(brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
  }

  informazioni() {
    return this.brand + " " + this.year + " " + this.color;
  }
}

const tonyCar = new Veicolo("Fiat", 2019, "Blu");

console.log(tonyCar.informazioni());
