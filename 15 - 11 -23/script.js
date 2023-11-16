const genEl = (type) => {
  return document.createElement(type);
};
const navBarEl = genEl("nav");
const titlePage = genEl("h2");
const navButtonSearch = genEl("button");
const navButtonCart = genEl("button");

const menuSection = genEl("section");
const menuButtonOne = genEl("button");
const menuButtonTwo = genEl("button");
const menuButtonThree = genEl("button");
const menuButtonFour = genEl("button");

const recommendedEl = genEl("section");
const titleRecommendedEl = genEl("h3");
const roboListEl = genEl("div");

navBarEl.className = "navBar";
titlePage.className = "titlePage";
navButtonSearch.className = "searchButton";
navButtonCart.className = "cartButton";

menuSection.className = "menu";
menuButtonOne.className = "menuButton";
menuButtonTwo.className = "menuButtonTwo";
menuButtonThree.className = "menuButtonThree ";
menuButtonFour.className = "menuButtonFour ";
recommendedEl.className = "recommended";
titleRecommendedEl.className = "titleRecommended";
roboListEl.className = "robo-list";

titlePage.textContent = "Find Best Furnitures";
navButtonCart.textContent = "🛒";
navButtonSearch.textContent = "🔎";
menuButtonOne.textContent = "🔎";
menuButtonTwo.textContent = "🔌 Accessori";
menuButtonThree.textContent = " 🔧 Ingranaggi";
menuButtonFour.textContent = "📃 Garanzie";
titleRecommendedEl.textContent = "Recommended For You";

document.body.append(navBarEl, menuSection, recommendedEl);
navBarEl.append(titlePage, navButtonSearch, navButtonCart);
menuSection.append(
  menuButtonOne,
  menuButtonTwo,
  menuButtonThree,
  menuButtonFour
);
recommendedEl.append(titleRecommendedEl, roboListEl);

const roboProdGen = (roboData) => {
  const wrapperEl = genEl("div");
  const lovebutton = genEl("button");
  const addCart = genEl("button");
  const imgEl = genEl("img");
  const textEl = genEl("div");
  const priceEl = genEl("p");
  const nameEl = genEl("h4");

  wrapperEl.className = "robo";
  lovebutton.className = "lovebutton";
  lovebutton.textContent = "❤";
  addCart.className = "addCart";
  imgEl.src = roboData.imageUrl;
  imgEl.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price + "$";
  nameEl.textContent = roboData.roboName;
  addCart.textContent = "+";
  textEl.append(priceEl, nameEl);
  wrapperEl.append(textEl, imgEl, lovebutton, addCart);
  lovebutton.addEventListener("click", () => {
    lovebutton.style.color = "#FF0000";
  });
  addCart.addEventListener("click", () => {
    addCart.style.color = "#007fff";
  });

  return wrapperEl;
};

const mockData = [
  {
    id: 1,
    roboName: "Casi",
    price: 10000,
    imageUrl: "https://robohash.org/casi",
  },
  {
    id: 2,
    roboName: "Alex",
    price: 1000,
    imageUrl: "https://robohash.org/alex",
  },
  {
    id: 3,
    roboName: "Simona",
    price: 1000,
    imageUrl: "https://robohash.org/simo",
  },
  {
    id: 4,
    roboName: "Chiara",
    price: 1000,
    imageUrl: "https://robohash.org/chiara",
  },
  {
    id: 5,
    roboName: "Vincenzo",
    price: 1000,
    imageUrl: "https://robohash.org/vincenzo",
  },
  {
    id: 6,
    roboName: "Alessandro",
    price: 1000,
    imageUrl: "https://robohash.org/alssandro",
  },
  {
    id: 7,
    roboName: "Valentina",
    price: 1000,
    imageUrl: "https://robohash.org/valentina",
  },
  {
    id: 8,
    roboName: "Federica",
    price: 1000,
    imageUrl: "https://robohash.org/federica",
  },
];

mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));

// ESERCIZIO N2
// try {
//   const mockData = [];
//   mockData.map((robo) => roboListEl.appendeeChild(roboProdGen(robo)));
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log("C'è un errore di sintassi");
//   } else if (error instanceof TypeError) {
//     console.log("C'è un errore di tipo");
//   } else {
//     console.log("Si è verificato un errore" + error.message);
//   }
// }
