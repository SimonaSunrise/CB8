const express = require("express");
const hbs = require("hbs");
const libri = require("./libri");
const altroRouter = require("./altroRouter");
const postRouter = require("./postRouter");

const app = express();

app.use(express.static("public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/libri", (req, res) => {
  res.render("testi", {
    libri,
  });
});

app.get("/altro", (req, res) => {
  res.render("altro");
});

app.use("/altro", altroRouter);
app.use("/libri", postRouter);

app.listen(3000, () => {
  console.log("Server attivo su porta 3000");
});
