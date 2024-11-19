const express = require('express')
const bodyParser = require('body-parser')
const mongoose =require('mongoose')
const userRouter = require('./Routers/users')
const burgerRouter = require('./Routers/burger')
const cartRouter = require('./Routers/cart')
const cartSchema = require('./Schemas/cart.shemas')



const app = express()

app.use(bodyParser.json())
const uri = "mongodb+srv://mag:nSSzGN4jFkp4YAQv@mag.2t5ps.mongodb.net/?retryWrites=true&w=majority&appName=Mag";

 const connectToDB = async () => {
    try{
        mongoose.set('strictQuery', false)
        
        await mongoose.connect(uri)
        console.log('Connected to MongoDB')

    }catch(error){
        console.log("connectedToDB error" , error)
        process.exit()
    }
}
connectToDB()
console.log('workes')
console.log('work')




// let users =[{name:"mohamed", age:25},{name:"ali",age:30},{name:"morew",age:33},{name:"jans",age:55}]



// app.get('/api/users',async function(req,res){
//     try{
//         const users = await userSchema.find()
//         res.json({Users: users, message:"ok"})

//     }catch(err){
//         console.log("app.get  error" , err)

//         res.status(400).json({message:"something went wrong"})

//     }

// })
// app.post('/api/users', async function(req,res){
//     try{
//         let userBody = req.body
//         const user = await  userSchema.create(userBody)
//         res.json({ message:"user added succesfully" , user: user})


//     }catch(err){
//         console.log("app.post some thing wrong",err)

//         res.status(400).json({ message:"this phone alreay exist"})

//     }
   
    
   

// })

// app.put('/api/users/:id',async function(req,res){
 
  
        
//     try{

//         let{id}=req.params
//         let{ name, phone ,age}=req.body
//         await userSchema.findByIdAndUpdate(id , { name, phone ,age} )
//         res.json({message:"ok user updated succesfully"})
//     }catch(err){
//         console.log("app.put error",err)
//         res.status(400).json({message:"something went wrong "})
        
//     }
// })
// app.delete('/api/users/:id',async function(req,res){
//       try{

//         let{id}=req.params
       
//         await userSchema.findByIdAndDelete(id )
//         res.json({message:"ok user deleted succesfully"})
//     }catch(err){
//         console.log("app.put error",err)
//         res.status(400).json({message:"something went wrong "})
        
//     }
// })
app.use('/' , userRouter )
app.use('/' , burgerRouter )
app.use('/api/cart' , cartRouter)


app.listen(8888 ,()=>{
    console.log('server is runnig on port 8888', 8888)

})