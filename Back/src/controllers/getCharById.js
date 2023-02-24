var fetch = require("node-fetch");
const getCharById = (res, id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        const aux = {
          id: data.id,
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(aux));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Character not Found");
      }
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err);
    });
};

module.exports = getCharById;
