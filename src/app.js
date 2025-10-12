//To create server 
const express = require("express");

const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello HI world")
})
module.exports = app;
