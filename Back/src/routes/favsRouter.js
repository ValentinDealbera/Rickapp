const {Router} = require('express')
const favRouter = Router()
const {favorites} = require('../DB_connection')


favRouter.post('/post', async (req,res)=>{
    const {id, name, species, gender, image} = req.body
    const obj = {
        id,
        name,
        species,
        gender,
        image
    }
    await favorites.create(obj)
    res.status(201).json(favorites)
})
favRouter.get('/get', async (req, res)=>{
    const favs = await favorites.findAll()
    return res.json(favs)
})
favRouter.delete('/delete/:id', async (req, res)=>{
    const {id} = req.params
    await favorites.destroy({
        where: {
            id: id
        }
    })
    const newFavs = await favorites.findAll()
    res.json(newFavs)
})

module.exports = favRouter