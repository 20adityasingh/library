const mongoose = require("mongoose")
const Schema = mongoose.Schema
const usermodel = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    },
    cpass:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("USER", usermodel)

