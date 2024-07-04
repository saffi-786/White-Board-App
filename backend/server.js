const express = require("express");

const app = express();

const server = require("http").createServer(app);
const { Server } = require("socket.io"); 

const io = new Server(server);
const port = process.env.PORT || 3000;

//routes

app.get("/", (req, res) => {
  res.send("Server is running");
});

io.on("connection", (socket) => {
  console.log("a user connected"); 
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
