var fetch = require('node-fetch')
const getCharDetail = (res, id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
            const aux = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin
                }
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(JSON.stringify(aux));
    }).catch(err => {
        res.writeHead(500, {'Content-Type':'text/plain'})
        res.end(err);
    })
}

module.exports= getCharDetail