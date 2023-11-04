// ESERCIZIO 1

function thermometer(Celsius) {
  if (Celsius <= 15) {
    return "freddo";
  } else if (Celsius > 15 && Celsius < 25) {
    return "mite";
  } else if (Celsius > 25) {
    return "caldo";
  } else {
    return "parametro non valido";
  }
}

console.log(thermometer(-3));

<// ESERCIZIO 2

let Simona = {
  name: "Simona",
  born: "1992",
  country: "Italia",
  language: ["Italiano", "Inglese", "Spagnolo", "Arabo"],
  religion: "Agnostica",
  "comfort-food": "pasta al forno o lasagne.",
};

console.log(
  "Questo è quello che so su di te: il tuo nome è",
  Simona.name,
  "hai",
  new Date().getFullYear() - parseInt(Simona.born),
  "anni",
  ", vivi in",
  Simona.country,
  "e hai studiato",
  Simona.language.length,
  "lingue:",
  Simona.language,
  ". Sei",
  Simona.religion,
  "e impazzisci se trovi a pranzo:",
  Simona["comfort-food"],
  "."
);

// ESERCIZIO AVANZATO

//ADD

const favourite = [];

function AddToFav(Title) {
  favourite.push(Title);
}

AddToFav("Titanic");
AddToFav("Biancaneve");
AddToFav("Top Gun");
AddToFav("Cenerentola");
AddToFav("Ragazzo di campagna");

console.log(favourite);


// SHOW

function ShowMeFav() {
  for (let i = 0; i < favourite.length; i++) {
    console.log(favourite[i]);
  }
}
ShowMeFav();

// DELETE


