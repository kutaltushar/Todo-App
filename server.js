const express = require('express');
const morgan =require('morgan');
const dotenv =require('dotenv');
const colors =require("colors");
const cors =require("cors");
const connectDB = require('./config/db');

//dotenv config
dotenv.config()

//DB connection
connectDB();

//rest object
const app =express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
 
//routes
app.use('/api/v1/test' ,require('./routes/testRouter'));

/*app.get("/test" , (req , res) => {
    return res.status(200).send("<h1>welcome todo app</h1>");
 });

*/
app.get("/tushar" , (req , res) => {
    return res.status(200).send("<h1>bye </h1>");
 });
//port
const PORT =process.env.PORT || 8000;

//listen
app.listen(PORT, ()=>{
    console.log(`Node server Running on ${process.env.DEV_MODE} mode on port no ${PORT}`.bgMagenta);
})