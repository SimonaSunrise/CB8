const express = require("express");
// utilizzo il bodyParse per estrarre i dati
const bodyParser = require("body-parser");

const logger = require("./logger");
// importo il middleware authorize per autorizzare solo admin all'accesso a ./dashboard
const authorize = require("./auth");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

// consento l'accesso ai dati
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
// Metodo GET in form per inviare i dati
app.get("/form", logger, (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});
// metodo POST in mostra-dati per prelevarli e utilizzarli

app.post("/mostra-dati", (req, res) => {
  const { nome } = req.body;
  const { cognome } = req.body;
  const { anno } = req.body;
  const { lavoro } = req.body;
  const { citta } = req.body;
  // inserisco un controllo e l'eventuale status400
  if (nome && cognome && anno && lavoro && citta) {
    return res
      .status(200)
      .send(`Benvenuto ${nome}, i tuoi dati sono stati inseriti correttamente`);
  }
  res.status(400).send("per favore aggiungi i dati");
});
// utilizzo authorize per gestire l'accesso a ./dashboard
app.get("/dashboard", [logger, authorize], (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.listen(PORT, () => {
  console.log("server attivo");
});
