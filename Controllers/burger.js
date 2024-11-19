const burgerSchemas = require('../Schemas/burger.schemas')

exports.serch = async (req, res) => { 
    try{
        const burger= await burgerSchemas.find({name:req.params.name})
        console.log('burgers', burger)
       res.json({message:"done get all",burgers: burger})

    }catch(err){
        console.log('err', err)
        res.status(400).json({message:"something went wrong in serch"})

}}

exports.getAllBureger = async (req, res) => { 
    try{
        const burgers = await burgerSchemas.find()
       
       console.log('burgers', burgers)
       res.json({message:"done get all",data:burgers})
        

    }catch(err){
        console.log('err', err)
        res.status(400).json({message:"something went wrong"})

    }}


exports.getONeBureger = async (req, res) => { 
    try{
        const burger= await burgerSchemas.find({_id:req.params.id})
        console.log('burgers', burgers)
       res.json({message:"done get all",data:burgers})

    }catch(err){
        console.log('err', err)
        res.status(400).json({message:"something went wrong"})

}}


exports.deleteBureger = async (req, res) => { 
    try{
        await burgerSchemas.findByIdAndDelete(req.params.id)
        res.json({massege:"done deleted", data: []})

    }catch(err){
        console.log('err', err)
        res.status(400).json({message:"something went wrong to deleted"})
    }}

exports.updateBureger = async (req, res) => { 
    try{
        await burgerSchemas.findByIdAndUpdate(req.params.id, req.body)
        res.json({massege:"done updateed", data:[]})


    }catch(err){
        console.log('err', err)
        res.status(400).json({message:"something went wrong to update"})
    }}

exports.createBureger = async (req, res) => {
     try{

        const createBureger = await burgerSchemas.create(req.body)
        res.json({massege:"done created ", data: createBureger})

     }catch(err){
        console.log('err', err)
        res.status(400).json({message:"something went wrong in create"})
     }}
