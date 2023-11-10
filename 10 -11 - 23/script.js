//  ESERCIZIO 1.

const genEl = (type) => {
  return document.createElement(type);
};
const heroSectionEl = genEl("section");
const heroImageEl = genEl("img");
const heroTitleEl = genEl("h1");
const heroParEl = genEl("p");
const heroButtonEl = genEl("button");
const heroDivEl = genEl("div");

const genClassToEl = (element, nameClass) => {
  return element.classList.add(nameClass);
};
genClassToEl(heroSectionEl, "section");
genClassToEl(heroImageEl, "imageHero");
genClassToEl(heroTitleEl, "title");
genClassToEl(heroParEl, "para");
genClassToEl(heroButtonEl, "button");
genClassToEl(heroDivEl, "div");

document.body.appendChild(heroSectionEl);
heroSectionEl.appendChild(heroImageEl);
heroSectionEl.appendChild(heroDivEl);
heroDivEl.append(heroTitleEl, heroParEl, heroParEl, heroButtonEl);

let heroImgUrl =
  "https://cdn.dribbble.com/users/2549306/screenshots/9181445/media/bcc9cabb9563793baa61e7f5e15cd32c.png";
heroImageEl.setAttribute("src", heroImgUrl);
heroImageEl.setAttribute(
  "alt",
  "A finger points to a lighthouse with a full moon behind it"
);

heroTitleEl.textContent = "Mira alla luna, mal che vada arriverai al faro";
heroParEl.textContent = "Clicca il bottone per iniziare il tuo percorso";
heroButtonEl.textContent = "Buon viaggio!";

// ESERCIZIO 2

heroButtonEl.addEventListener("mouseover", () => {
  heroTitleEl.style.color = "#35349d";
});

heroButtonEl.addEventListener("click", () => {
  heroSectionEl.style.display = "none";
});

const imageSection = genEl("section");
genClassToEl(imageSection, "imageSection");
document.body.appendChild(imageSection);

// ESERCIZIO AVANZATO

let packImage = {
  id: 1,
  imgUrl: "https://picsum.photos/200/200?1",
  altText: "Immagine alternativa 1",
};

let packImageDue = {
  id: 2,
  imgUrl: "https://picsum.photos/200/200?1",
  altText: "Immagine alternativa 2",
};

const imageGenerator = (imgObj) => {
  const image = genEl("img");
  genClassToEl(image, "image");
  imageSection.appendChild(image);
  image.setAttribute("src", imgObj.imgUrl);
  image.setAttribute("alt", imgObj.altText);
  image.setAttribute("id", imgObj.id);
};

imageGenerator(packImage);
imageGenerator(packImageDue);

// ESERCIZIO AVANZATO PER GLI AUDACI

const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

imageList.map((picture) => imageGenerator(picture));
