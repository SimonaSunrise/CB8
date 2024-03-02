const express = require("express");
const autoreRouter = express.Router();
const libri = require("./libri");

autoreRouter.get("/risultati-ricerca", (req, res) => {
  let query = req.query.q;
  query = query.toLowerCase();
  const libriPerAutore = libri.filter((libro) =>
    libro.autore.toLowerCase().includes(query)
  );
  if (libriPerAutore.length === 0) {
    res.status(400).send("Nessun risultato trovato per l'autore specificato.");
  } else {
    res.render("risultati-ricerca", {
      title: "Ecco i risultati della tua ricerca per autore",
      query: query,
      libri: libriPerAutore,
    });
  }
});

module.exports = autoreRouter;
