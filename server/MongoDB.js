const mongoose = require('mongoose');

function DB(){
    const url = process.env.MONGODB;
    mongoose.connect(url);
}

const mdb = mongoose.connection;
mdb.on("error",console.error.bind(console,"Error"));
mdb.once("open",()=>{
    console.log("DB connected")
});


module.exports = DB;