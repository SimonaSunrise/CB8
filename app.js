const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3123;


const randomYears = Math.floor(Math.random() * (2010 - 1970 + 1)) + 1970;
let students = [
    {
        id: 1,
        name: "Simona",
        born: randomYears.toString(),
        city:
          "Palermo",
    photo: `https://api.dicebear.com/8.x/adventurer/svg?seed=${this.name}`},
    {
        id: 2,
        name: "Tom",
        born: randomYears.toString(),
        city:
          "Palermo",
    photo: `https://api.dicebear.com/8.x/adventurer/svg?seed=${this.name}`},
    {
        id: 3,
        name: "Kiki",
        born: randomYears.toString(),
        city:
          "Palermo",
    photo: `https://api.dicebear.com/8.x/adventurer/svg?seed=${this.name}`},
    {
        id: 4,
        name: "Buster",
        born: randomYears.toString(),
        city:
          "Palermo",
    photo: `https://api.dicebear.com/8.x/adventurer/svg?seed=${this.name}`},
    {
        id: 5,
        name: "Bon",
        born: randomYears.toString(),
        city:
          "Palermo",
    photo: `https://api.dicebear.com/8.x/adventurer/svg?seed=${this.name}`},
    {
        id: 6,
        name: "Bella",
        born: randomYears.toString(),
        city:
          "Palermo",
    photo: `https://api.dicebear.com/8.x/adventurer/svg?seed=${this.name}`},
    {
        id: 7,
        name: "George",
        born: randomYears.toString(),
        city:
          "Palermo",
    photo:`https://api.dicebear.com/8.x/adventurer/svg?seed=${this.name}`},

];

app.use(express.json());
app.use(cors());



app.get("/students", (req, res, next) => {
  res.json(students);
});



app.post("/students", (req, res, next) => {
  const body = req.body;

  if (body.id && body.name && body.born && body.city && body.photo) {
    students.push(body);
    res.status(201).send("Lo studente è stato correttamente aggiunto");
  } else {
    res.status(400).send(`La struttura dell'oggetto non è valida`);
  }
});



app.delete("/students/:id", (req, res, next) => {
  const id = Number(req.params.id);
  students = students.filter((student) => student.id !== id);
  res.send("Il film è stato rimosso!");
});



app.put("/students/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const body = req.body;
    const index = students.findIndex((student) => student.id === id);
  
    if (index === -1) {
      res.status(400).send("Studente non trovato");
    } else {
      students[index] = { ...students[index], ...body };
  
      res.send("Profilo studente modificato!");
    }
  });


app.listen(PORT);