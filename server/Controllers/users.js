const usermodel = require('../Schemas/users.schema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register =async function (req ,res) {
    try{
        let newuser = new usermodel( req.body )
//hash paswerd 
        const hashedPassword = await bcrypt.hash( req.body.password ,10)
        newuser.password =hashedPassword
        let createdUSer = await newuser.save()
        res.json({message:"user added Successfully", user: createdUSer})

    }catch(error){
        res.status(400).json({message:"error"})  
        console.log(error)

    }
}
exports.login =async function (req ,res) {
    try{
        console.log('in try login')
        let user = await usermodel.findOne({email:req.body.email})
        if(!user){
             res.status(401).json({message:"invalid email or password"})
        }
        console.log(user)
        
        let passwordCheck = await user.comparePassword(req.body.password)
        if(passwordCheck === false){
             res.status(401).json({message:"invalid email or password"})
        }
        const token = jwt.sign({_id : user._id ,name: user.name}, 'secret')
        res.status(200).json({message:"login successfully",user:{name:user.name ,email : user.email, token:token} })

    }catch(error){
        res.status(400).json({message:"error in catch"})
        console.log(error)

    }
}