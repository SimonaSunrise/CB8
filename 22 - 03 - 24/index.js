require("dotenv").config();

const express =require("express");
const mongoose=require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Tutorial = require("./models/tutorial");
const User = require("./models/user")


const app = express();

app.use(express.json());

const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL);

db.on("error", (err) => console.log(err))
db.once("open", () => console.log("Connessione ok con DB"))


const authenticationToken = (req, res, next) => {
    const authHeader= req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]
    if(token === null) {
       res.status(400).json({
           message:"Token non valido"
       })
    } else {
       jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
           if(err) res.status(403).json({
               message: "Accesso non consentito"
           }) 
           req.user = user;
           next()
       })
   
    }
   }

   app.post("/login", async(req, res) => {
    const user = await User.findOne({
      username: req.body.username
    })


    if (user === null) {
        return res.status(400).json({
            message: "Utente non esiste"
        })
    }

    try {
        // const bcryptCompare = await bcrypt.compare(req.body.password, user.password) essendo un dato sensibile meglio non metterlo in una variabile
if (await bcrypt.compare(req.body.password, user.password)){
    const accessToken = jwt.sign(
        { username: user.username },// nn del body ma di user
        process.env.ACCESS_TOKEN_SECRET// grazie a lui decodifichiamo la pass per usarla nella logica per fare in render di un utente loggato
      );
res.json({
    accessToken
})
}} catch (error) {
        res.json({
            message: "Autorizzazione non permessa"
        })

    }
})


app.post("/register", async(req, res) => {
    try {
        const hashedPassword= await bcrypt.hash(req.body.password, 10)
        const user = new User({
            username: req.body.username,
            password: hashedPassword
        })
    
        const newUser= await user.save();
        res.status(201).json( { message: "Utente registrato", user: newUser})
    }catch (error){
    res.status(500).json({
        messsage: "Registrazione fallita"
    })
    }
    })
    
    

    app.get("/tutorials", authenticationToken, async(req, res) => {
        const tutorials = await Tutorial.find()
        
        res.status(200).json({ tutorials })
        })
        

app.listen(3000)


