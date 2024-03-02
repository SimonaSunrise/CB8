const express = require("express");
const annoRouter = express.Router();
const libri = require("./libri");

annoRouter.get("/1600", (req, res) => {
  const libri1600 = libri.filter((libro) => libro.anno < 1699);
  if (libri1600.length === 0) {
    res.status(400).send("Nessun risultato trovato ");
  } else {
    res.render("anno_dinamico", { libri: libri1600, title: "fino al 1699" });
  }
});

annoRouter.get("/1700", (req, res) => {
  const libri1700 = libri.filter(
    (libro) => libro.anno > 1699 && libro.anno < 1800
  );
  if (libri1700.length === 0) {
    res.status(400).send("Nessun risultato trovato ");
  } else {
    res.render("anno_dinamico", { libri: libri1700, title: "fino al 1799" });
  }
});

annoRouter.get("/1800", (req, res) => {
  const libri1800 = libri.filter(
    (libro) => libro.anno > 1799 && libro.anno < 1900
  );
  if (libri1800.length === 0) {
    res.status(400).send("Nessun risultato trovato ");
  } else {
    res.render("anno_dinamico", { libri: libri1800, title: "fino al 1899" });
  }
});

annoRouter.get("/1900", (req, res) => {
  const libri1900 = libri.filter(
    (libro) => libro.anno > 1899 && libro.anno < 2000
  );
  if (libri1900.length === 0) {
    res.status(400).send("Nessun risultato trovato ");
  } else {
    res.render("anno_dinamico", { libri: libri1900, title: "fino al 1999" });
  }
});

annoRouter.get("/2000", (req, res) => {
  const libri2000 = libri.filter((libro) => libro.anno > 1999);
  if (libri2000.length === 0) {
    res.status(400).send("Nessun risultato trovato ");
  } else {
    res.render("anno_dinamico", {
      libri: libri2000,
      title: "fino al 2000 e oltre",
    });
  }
});

module.exports = annoRouter;
