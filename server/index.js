// console.log("Implement servermu disini yak 😝!");
const fs = require("fs");
const path = require("path");
const http = require("http");
const express = require ("express");
const { json } = require("express");

const app = express();


app.use(express.static(path.join(__dirname,"../public/")))

app.get("/", (req, res) => {
    const letakFile = path.join(__dirname,"../public/index.html");
    const bacaFile= fs.readFileSync(letakFile,"utf-8");
    res.send(bacaFile);
})

app.get("/carimobil", (req, res) => {
    const letakFile = path.join(__dirname,"../data/cars.json");
    let bacaFile= fs.readFileSync(letakFile,"utf-8");
    // bacaFile = JSON.parse(bacaFile);
    // const {tipedriver,tanggal,waktujemput,jumlahpenumpang} = req.query;
    // const hasil = bacaFile.filter((el)=>{
    //     return (el.capacity===jumlahpenumpang)&&(el.availableAt===new Date (tanggal+ " " +waktujemput))
    // })
    res.send(bacaFile);
    
})

app.listen(8080, () => {
    console.log(`Server Running on port ${8080}`)
})