const express = require('express')
const router = express.Router()

const fs = require('fs')
const fsp = fs.promises

const arrData = [
    {name: 'Історія Укрїни', text:'ndList -- упорядоченная коллекция объектов элементов, которые являются детьми данного элемента. Если у элемента нет детей, *ndList *пуст.ndList -- переменная, хранящая список дочерних элементов. Тип этого списка -- NodeList.'},
    {name: 'Безпека', text:'ndList -- упорядоченная коллекция объектов элементов, которые являются детьми данного элемента. Если у элемента нет детей, *ndList *пуст.ndList -- переменная, хранящая список дочерних элементов. Тип этого списка -- NodeList.'}
]

router.get('/', (req,res) =>{
    res.render('page')
})

router.get('/data', (req,res) => {
    console.log(arrData);
    res.json(arrData)
})

router.post('/create', (req,res) => {
    arrData.push({name:req.body.name, text:req.body.text})
    res.json(arrData);
})

module.exports = router; 