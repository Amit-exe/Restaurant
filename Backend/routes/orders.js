const express = require('express')

const router = express.Router()

router.get("/",(req,res)=>{
    res.status(200).json({message:"get all orders"})
})

module.exports = router;