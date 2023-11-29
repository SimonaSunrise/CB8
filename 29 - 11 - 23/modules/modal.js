// AVANZATO NON RIUSCITO 


import { genEl } from "./components";

const genPopupUpComingEl = (
  endpoint,
  title,
  text,
  imgUrl,
  imgAlt,
  popUpPlotText,
  buttonYesText,
  buttonNoText
) => {
  const data = await httpGET(endpoint);

  const popupEl = genEl("div");
  const popupTextEl = genEl("p");

  const popupFilmEl = genEl("div");
  const titleFilmEl = genEl("h5");
  const imgPopUpEl = genEl("img");
  const popUpPlotEl = genEl("p");

  const answerEl = genEl("div");
  const YesbtnEl = genEl("button");
  const NobtnEl = genEl("button");

  popupEl.className = "popup";
  popupTextEl.className = "popup-text";
  popupTextEl.textContent = text;
  const text = (titleFilmEl.textContent = title);
  popupFilmEl.className = "pop-up-film";
  imgPopUpEl.src = imgUrl;
  imgPopUpEl.alt = title;
  popUpPlotEl.className = "popup-plot";
  popUpPlotEl.textContent = popUpPlotText;
  answerEl.className = "answer-box";
  YesbtnEl.textContent = buttonYesText;
  YesbtnEl.className = "yes";
  NobtnEl.textContent = buttonNoText;
  NobtnEl.className = "no";

  YesbtnEl.addEventListener("click", () => {
    popupEl.remove();
  });
  YesbtnEl.addEventListener("click", () => {
    backEl.style.display = "none";
  });
  NobtnEl.addEventListener("click", () => {
    popupEl.remove();
  });
  NobtnEl.addEventListener("click", () => {
    backEl.style.display = "none";
  });

  popupEl.append(popupTextEl, popupFilmEl, answerEl);
  popupFilmEl.append(imgPopUpEl, titleFilmEl, popUpPlotEl);
  answerEl.append(YesbtnEl, NobtnEl);

  document.body.appendChild(popupEl);

  return popupEl;
};

export { addAsyncPopupUpComingEl };

// addAsyncPopupUpComingEl();

// export { addAsyncPopupUpComingEl };

// ("https://image.tmdb.org/t/p/w200${imageData.poster_path}");
