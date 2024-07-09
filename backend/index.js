const PORT = 18000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json()); //response will auto pass thorugh json
app.use(cors()); //react will connect using on the prot

app.use(
      cors({
          origin : "http://localhost:3000"
      })
)

//Database connectio with mongo DB
mongoose.connect("mongodb+srv://shopezdev:eIuRLShLGvtFd08E@cluster0.aml2wwr.mongodb.net/Shop-EZ/Login")



app.listen(PORT,() => {
      try {
            console.log(`Connected to database at PORT : ${PORT}`)
      } catch (err) {
            console.error(`Error connecting to database, Error : ${err}`)
      }
})