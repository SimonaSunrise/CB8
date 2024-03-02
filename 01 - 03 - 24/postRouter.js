const express = require("express");
const { post } = require("./genereRouter");
const postRouter = express.Router();
const libri = require("./libri");
const bodyParser = require("body-parser");
postRouter.use(bodyParser.urlencoded({ extended: true }));

postRouter.get("/nuovo", (req, res) => {
  res.render("nuovo");
});

postRouter.post("/nuovo", (req, res) => {
  const nuovoLibro = req.body;
  libri.push(nuovoLibro);
  res.redirect("/libri");
});
module.exports = postRouter;
