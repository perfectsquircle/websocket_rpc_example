const handler = require("serve-handler");
const http = require("http");
const WebSocket = require("ws");
const Procedures = require("./Procedures");

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: "./public",
  });
});

server.listen(3000, () => {
  console.log("Running at http://localhost:3000");
});

const webSocketServer = new WebSocket.Server({
  port: 3001,
});

webSocketServer.on("connection", function (socket) {
  console.log("WebSocket connection established.");
  let session = new Procedures(socket);
});
