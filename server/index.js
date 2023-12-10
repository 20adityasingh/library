const express = require("express");
const dotenv = require("dotenv");
const MONGOdb = require("./MongoDB")
const app = express();

dotenv.config();
MONGOdb();

app.use(express.json());

const port = 8081;

app.listen(port, ()=>{
    console.log(`Server has been started at Port: ${port}`);
})