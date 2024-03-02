const express = require("express");
const altroRouter = express.Router();

const genereRouter = require("./genereRouter");
const autoreRouter = require("./autoreRouter");
const annoRouter = require("./annoRouter");
const valutazioneRouter = require("./valutazioneRouter");

altroRouter.get("/genere", (req, res) => {
  res.render("genere", {
    title: "Genere",
  });
});

altroRouter.get("/autore", (req, res) => {
  res.render("autore", {
    title: "Autore",
  });
});

altroRouter.get("/anno", (req, res) => {
  res.render("anno", {
    title: "Anno",
  });
});
altroRouter.get("/valutazione", (req, res) => {
  res.render("valutazione", {
    title: "Valutazione",
  });
});

altroRouter.use("/genere", genereRouter);
altroRouter.use("/autore", autoreRouter);
altroRouter.use("/anno", annoRouter);
altroRouter.use("/valutazione", valutazioneRouter);
module.exports = altroRouter;
