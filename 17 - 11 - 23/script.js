// ESERCIZIO 1 + AVANZATO
const backEl = document.createElement("div");
backEl.className = "back";
document.body.append(backEl);

const addPopupYNEl = (text) => {
  const popupEl = document.createElement("div");
  const popupTextEl = document.createElement("p");
  const answerEl = document.createElement("div");
  const YesbtnEl = document.createElement("button");
  const NobtnEl = document.createElement("button");

  popupEl.className = "popup";
  popupTextEl.className = "popuptext";
  answerEl.classList = "answerbox";
  YesbtnEl.className = "yes";
  NobtnEl.className = "no";

  YesbtnEl.textContent = "Si";
  YesbtnEl.addEventListener("click", () => {
    popupEl.remove();
  });
  YesbtnEl.addEventListener("click", () => {
    backEl.style.display = "none";
  });
  NobtnEl.textContent = "No";
  NobtnEl.addEventListener("click", () => {
    window.location.href = "https://www.google.it/?hl=it";
  });
  popupTextEl.textContent = text;

  document.body.appendChild(popupEl);
  popupEl.append(popupTextEl, answerEl);
  answerEl.append(YesbtnEl, NobtnEl);

  return popupEl;
};

const popupTimer = setTimeout(() => {
  const popup = addPopupYNEl("Sei maggiorenne?");
}, 3500);

// SECONDO ESERCIZIO

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data.products.filter((item) => item.price < 50)));
