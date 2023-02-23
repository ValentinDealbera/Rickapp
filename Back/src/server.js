const http = require("http");
const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      const characterFilter = characters.filter(char => char.id === Number(id))
      if (characterFilter.length >= 1) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(characterFilter[0]));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("character not found");
      }
      return;
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Route not found");
    }
  })
  .listen(3001, "localhost");
