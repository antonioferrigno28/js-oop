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

class Automobile extends Veicolo {
  constructor(brand, year, color, doors, gasType) {
    super(brand, year, color);
    this.doors = doors;
    this.gasType = gasType;
  }

  informazioniAutomobile() {
    return this.doors + " " + this.gasType;
  }
}

const nowDate = new Date();
const nowYear = nowDate.getFullYear();

const tonyCar = new Veicolo("Fiat", 2019, "Blu");

console.log(`Ecco le informazioni del veicolo: ${tonyCar.informazioni()}`);

console.log(`L'età del veicolo è: ${tonyCar.calcoloEta()} anni`);

const tizianoCar = new Automobile("Opel", 2020, "Nera", 4, "benzina");

console.log(
  `I dettagli "porte" e "Tipo di gas" sono: ${tizianoCar.informazioniAutomobile()}`
);
