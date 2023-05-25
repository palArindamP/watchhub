import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/connection.js";

import auth from "./routes/auth.js"


//configure env
dotenv.config();

//database connect
connectDB()

//rest object
const app= express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", auth);

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });

  //PORT
const PORT = process.env.PORT || 8000 ;

//run listen
app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV} mode on port ${PORT}`.cyan
        .white
    );
  });