// PRIMO ESERCIZIO

const sum = (first, second, third) => first + second + third;
const sub = (first, second, third) => first - second - third;
const mult = (first, second, third) => first * second * third;
const divis = (first, second) => first / second;

function calculator(fn) {
  return fn;
}
console.log(calculator(sub(2, 2, 2)));







// SECONDO ESERCIZIO

const funnyGift = [
  {
    idcode: 123456789,
    nome: "Baffi finti",
    urlImage:
      "https://cairolicentro.com/722-large_default/baffi-a-manubrio-asburgici.jpg",
    Desc: "Baffi finti professionali a manubrio neri. Stile esercito asburgico, baffo grande e importante, da applicare con apposito nastro biadesivo compreso nel prezzo, oppure applicabili con l'apposito mastice acquistabile separatamente.",
  },
  {
    idcode: 234567890,
    nome: "Corona di plastica",
    urlImage: "https://cairolicentro.com/807-large_default/corona-reale.jpg",
    Desc: "Corona dorata con pietre colorate da re, imperatore, arciduca, principe. Le croci si alternano con il motivo decorativo del giglio regale. Lavorazione a rilievo simula la cesellatura dell’oro.",
  },
  {
    idcode: 345678901,
    nome: "Naso da clown",
    urlImage: "https://cairolicentro.com/546-large_default/naso-da-clown.jpg",
    Desc: "Naso finto, posticcio, protesi del naso per pagliaccio o clown. Sfera in plastica da 6 cm da sovrapporre al naso e con elastico sottile affrancare dietro alla testa.",
  },
];

funnyGift.forEach((gift) => console.log(gift));

funnyGift.map((gift) => console.log(gift));

// forEach non ha un return e non creerà un nuovo array su cui lavorare







// ESERCIZIO AVANZATO

const firstArray = [2, 4, 6, 8];
const secondArray = [1, 3, 5, 7];
const arrayModificato = firstArray.map((number) => number * 2);
const arrayModificatoBis = secondArray.map((number) => number + 5);

console.log(arrayModificato);
console.log(arrayModificatoBis);

const arrayFiltrato = arrayModificato.filter((number) => number > 10);
console.log(arrayFiltrato);

const arrayFiltratoBis = arrayModificatoBis.filter((number) => number % 2 == 0);
console.log(arrayFiltratoBis);

const trasformAndFilter = (primoArray, secondoArray) => {
  const arrayModificato = primoArray.map((number) => number * 2);
  const arrayModificatoBis = secondoArray.map((number) => number + 5);
  const arrayFiltrato = arrayModificato.filter((number) => number > 10);
  const arrayFiltratoBis = arrayModificatoBis.filter(
    (number) => number % 2 == 0
  );
  console.log(arrayFiltrato, arrayFiltratoBis);
};

trasformAndFilter(firstArray, secondArray);
