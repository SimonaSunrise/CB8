const express = require("express");
const valutazioneRouter = express.Router();
const libri = require("./libri");

valutazioneRouter.get("/1", (req, res) => {
  const valutazioneLibri = libri.filter(
    (libro) => libro.valutazione > 1 && libro.valutazione < 2
  );
  res.render("valutazione_dinamica", { libri: valutazioneLibri });
});

valutazioneRouter.get("/2", (req, res) => {
  const valutazioneLibri = libri.filter(
    (libro) => libro.valutazione >= 2 && libro.valutazione < 3
  );
  res.render("valutazione_dinamica", { libri: valutazioneLibri });
});
valutazioneRouter.get("/3", (req, res) => {
  const valutazioneLibri = libri.filter(
    (libro) => libro.valutazione >= 3 && libro.valutazione < 4
  );
  res.render("valutazione_dinamica", { libri: valutazioneLibri });
});

valutazioneRouter.get("/4", (req, res) => {
  const valutazioneLibri = libri.filter(
    (libro) => libro.valutazione >= 4 && libro.valutazione < 5
  );
  res.render("valutazione_dinamica", { libri: valutazioneLibri });
});

module.exports = valutazioneRouter;
