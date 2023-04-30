const express = require('express')

const router = express.Router()
const fs = require('fs')
const fsp = fs.promises

router.get('/', (req,res) =>{
    res.render('page')
})

const arrData = []


router.get('/data', (req,res) => {
    console.log(arrData);
    res.json(arrData)
})




router.post('/ajax', (req,res) => {
    arrData.push({name:req.body.name, text:req.body.text})
    res.json(arrData)
})




module.exports = router;