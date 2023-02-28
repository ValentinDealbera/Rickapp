const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios')
function getCharDetail(req, res) {
  const { detailId } = req.params;
  axios(URL + detailId)
  .then(response => {
    const character = {
      id: response.data.id,
      name: response.data.name,
      species: response.data.species,
      image: response.data.image,
      gender: response.data.gender,
      origin: response.data.origin,
    }
    res.status(200).json(character)
  })
  .catch(err => res.status(404).send(err.message))
  
}

module.exports = getCharDetail;
