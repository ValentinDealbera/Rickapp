const {Router} = require('express')
const favRouter = Router()
let favs = require('../utils/favs')



favRouter.post('/post', (req,res)=>{
    const {id, name, species, gender, image} = req.body
    const obj = {
        id,
        name,
        species,
        gender,
        image
    }
    favs.push(obj)
    res.status(201).json(favs)
})
favRouter.get('/get', (req, res)=>{
    return res.json(favs)
})
favRouter.delete('/delete/:id', (req, res)=>{
    const {id} = req.params
    favs = favs.filter(pj => pj.id !== Number(id))
    res.json(favs)
})

module.exports = favRouter