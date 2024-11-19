const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt= require("bcryptjs")


const userSchema = new Schema({
    name: String,
    age :Number,
    phone : {type : String , unique:true},
    email : {type : String , unique:true},
    password : String
    
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};
module.exports =mongoose.model('Users' , userSchema)