const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

const genEl = (type) => {
  const newEl = document.createElement(type);

  return newEl;
};

const genNavBar = (imageSrc, liText, liBisText, labelText) => {
  const searchContainerNavBarEl = genEl("div");
  const logoNavBarEl = genEl("img");
  const inputNavBarEl = genEl("input");

  const linksContainerNavBarEl = genEl("div");
  const ulNavBarEl = genEl("ul");
  const liNavBarEl = genEl("li");
  const liNavBarBisEl = genEl("li");
  const labelNavBarEl = genEl("label");
  const selectNavBarEl = genEl("select");
  const optionNavBarEl = genEl("option");

  searchContainerNavBarEl.className = "search";
  logoNavBarEl.src = imageSrc;
  logoNavBarEl.alt = "logo";
  inputNavBarEl.type = "text";
  inputNavBarEl.placeholder = "Search";
  linksContainerNavBarEl.className = "links";
  ulNavBarEl.className = "links-list";
  liNavBarEl.textContent = liText;
  liNavBarBisEl.textContent = liBisText;
  labelNavBarEl.textContent = labelText;
  labelNavBarEl.for = "categories";
  selectNavBarEl.name = "categories";
  selectNavBarEl.id = "categories";
  optionNavBarEl.value = "";

  searchContainerNavBarEl.append(logoNavBarEl, inputNavBarEl);
  linksContainerNavBarEl.appendChild(ulNavBarEl);
  ulNavBarEl.append(liNavBarEl, liNavBarBisEl, labelNavBarEl, selectNavBarEl);
  selectNavBarEl.appendChild(optionNavBarEl);
  return [searchContainerNavBarEl, linksContainerNavBarEl];
};

export { genEl, genNavBar, cardElGen, cardsListElGen, listsContainerElGen };
