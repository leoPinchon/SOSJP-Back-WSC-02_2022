//Dependences 
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

// Variables
const app = express();
const port = process.env.PORT || 3030;
const exemple = require("./routes/exemple")

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/exemple", exemple);

app.get("/", (req, res) => {
  res.status(200).send("Bienvenue sur SOS Jeunes Pousses");
});

app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
