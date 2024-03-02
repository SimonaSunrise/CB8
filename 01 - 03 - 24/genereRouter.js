const express = require("express");
const genereRouter = express.Router();
const libri = require("./libri");

genereRouter.get("/fantasy", (req, res) => {
  const libriFantasy = libri.filter((libro) => libro.genere === "Fantasy");
  res.render("genere_dinamico", { title: "Fantasy", libri: libriFantasy });
});
genereRouter.get("/distopia", (req, res) => {
  const libriDistopia = libri.filter((libro) => libro.genere === "Distopia");
  res.render("genere_dinamico", {
    title: "Distopia",
    libri: libriDistopia,
  });
});
genereRouter.get("/romanzo", (req, res) => {
  const libriRomanzo = libri.filter((libro) => libro.genere === "Romanzo");
  res.render("genere_dinamico", {
    title: "Romanzo",
    libri: libriRomanzo,
  });
});
genereRouter.get("/letteratura", (req, res) => {
  const libriLetteratura = libri.filter(
    (libro) => libro.genere === "Letteratura"
  );
  res.render("genere_dinamico", {
    title: "Letteratura",
    libri: libriLetteratura,
  });
});

module.exports = genereRouter;
