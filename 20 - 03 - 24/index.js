require("dotenv").config();


const express =require("express");
const mongoose=require("mongoose");

const User = require("./models/users");

const app = express();

const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL);

app.use(express.json());

db.on("error", (err) => console.log(err))
db.once("open", () => console.log("Connessione ok con DB"))



app.get("/users", async(req , res) => {
    const { page = 1, limit = 4 } = req.query;

    try {
      const users = await User.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      const count = await User.countDocuments();
  
      res.json({
        users,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    } catch (err) {
      console.error(err.message);
    }

} )

    app.post("/users", async (req, res) => {
        const user = new User({
          username: req.body.username,
          name: req.body.name,
          surname: req.body.surname,
          year: req.body.year,
          favourite: req.body.favourite,
        });
      
        try {
          const newUser = await user.save();
      
          res.status(201).json({message: `${req.body.username} è stato aggiungo`});
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
    }                   
    )      

    app.delete("/users/:id", async (req, res) => {
        try {
          if (req.params.id === "all") {
            await User.deleteMany();
            res
              .status(201)
              .json({ message: "Tutto cancellat!" });
          } else {
            await User.findByIdAndDelete(req.params.id);
            res.status(201).json({ message: "Cancellato" });
          }
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      });
      
      app.put("/users/:id", async (req, res) => {
        try {
          const user = await User.findById(req.params.id);
      
          if (!user) {
            res.status(404).json({ message: "Page not found" });
          } else {
            const { username, name, surname, year, favourite } = req.body;
      
            if (username && name && surname && year && favourite)  {
              user.username = username;
              user.name = name;
              user.surname = surname;
              user.year = year;
              user.favourite = favourite;

              await user.save();
              res.status(201).json({ message: "Modificato" });
            }
          }
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      });
      

app.listen(3001)


