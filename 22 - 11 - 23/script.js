// ESERCIZIO 1

const getImageList = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  data.map((img) => console.log(img.download_url));
};

getImageList("https://picsum.photos/v2/list");

// ESERCIZIO 2

const getImgAndText = (author, download_url) => {
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h1");

  imgEl.setAttribute("src", download_url);
  imgEl.setAttribute("alt", "testo alternativo");
  imgEl.setAttribute("width", "300px");
  titleEl.textContent = author;

  document.body.append(imgEl, titleEl);
};

const advanceGetImageList = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();
  data.map((obj) => getImgAndText(obj.author, obj.download_url));
};

advanceGetImageList();

// const obj = {
//   id: "0",
//   author: "Alejandro Escamilla",
//   download_url: "https://picsum.photos/id/0/5000/3333",
// };
