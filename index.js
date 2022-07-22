const express = require("express");
const app =express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/club",(req,res)=>{
    res.send("welcome to the club!")
})

app.listen(PORT,()=>{
    console.log(`listenin to the smooth sounds of port ${PORT}`)
})