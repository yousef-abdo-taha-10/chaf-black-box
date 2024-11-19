const express = require('express')
const router = express.Router()
const burgerController = require('../Controllers/burger')


router.get('/api/burgers' , burgerController.getAllBureger)
router.get('/api/burgers/serch' , burgerController.serch)

router.get('/api/burgers/:id' , burgerController.getONeBureger )
router.delete('/api/burgers/:id' , burgerController.deleteBureger )
router.put('/api/burgers/:id' ,  burgerController.updateBureger)
router.post('/api/burgers' , burgerController.createBureger)




module.exports= router