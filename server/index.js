const io = require("socket.io");
const server = io.listen(3000);

console.log('initialized :3000');
server.on("connection", function(socket) {
  console.log("user connected");
  socket.emit("welcome", "welcome man");


  socket.on("refresh-data", function(msg) {
    console.log(msg);
  });
});
