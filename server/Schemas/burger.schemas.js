const mongoose = require('mongoose')
const Schema = mongoose.Schema


const burgerSchema = new Schema({
    name: String,
    price :Number,
    description : String,
    image : String,
   

    
})


module.exports =mongoose.model('burger' , burgerSchema)