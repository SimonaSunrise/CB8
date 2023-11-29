import { httpGET } from "./modules/http.js";
import {
  genEl,
  genNavBar,
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
} from "./modules/components.js";
const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

const mainSectionEl = document.querySelector(".main");
const navBarEl = document.querySelector(".navbar");

const [searchContainer, linksContainer] = genNavBar(
  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
  "TV Show",
  "Movies",
  "Categories"
);

navBarEl.append(searchContainer, linksContainer);

console.log(
  httpGET("/movie/upcoming").then((data) => data.map((el) => console.log(el)))
);

// 1 STEP
// httpGET("/tv/top_rated").then((data) => {
//   const listContainerEl = listsContainerElGen("Top Rated");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// httpGET("/tv/popular").then((data) => {
//   const listContainerEl = listsContainerElGen("Popular");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// 2 STEP
// asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated").then(
//   (element) => mainSectionEl.append(element)
// );
// asyncListContainerElGen("/tv/popular", "Serie Tv - Popular").then((element) =>
//   mainSectionEl.append(element)
// );

// 3 STEP
Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));
