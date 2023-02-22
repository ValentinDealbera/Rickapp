const http = require("http");
const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (
      req.url.split("/")[1] + "/" + req.url.split("/")[2] ===
      "rickandmorty/character"
    ) {
      const id = req.url.split("/")[3];
      if (characters[id]) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(characters[id - 1]));
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
