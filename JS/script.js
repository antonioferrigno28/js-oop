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

  calcoloEta() {
    return nowYear - this.year;
  }
}

const nowDate = new Date();
const nowYear = nowDate.getFullYear();

const tonyCar = new Veicolo("Fiat", 2019, "Blu");

console.log(`Ecco le informazioni del veicolo: ${tonyCar.informazioni()}`);

console.log(`L'età del veicolo è: ${tonyCar.calcoloEta()} anni`);
