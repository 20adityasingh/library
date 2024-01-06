const express = require("express");
const dotenv = require("dotenv");
const MONGOdb = require("./MongoDB")
const app = express();
const userRoute = require("./router/routes")
dotenv.config();
MONGOdb();

app.use(express.json());

const port = 8081;

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Server has started",
  });
});
app.use("/",userRoute)

app.listen(port, ()=>{
    console.log(`Server has been started at Port: ${port}`);
})