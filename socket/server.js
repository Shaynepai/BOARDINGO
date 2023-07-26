const app = require("express")();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
    origin: "*",
  }
});

io.on("connection", (socket) => {
 console.log("What is socket: ", socket);
 console.log("Socket is active to be connected ");
console.log("User is connected");

 socket.on("chat", (payload) => {
    console.log("What is payload", payload);
    io.emit("chat", payload);
 });

//  socket.on('chat', (payload) => {
//   const { content, sender, file } = payload;
//   io.emit('chat', { content, sender, file });
// });


 socket.on('disconnect', () => {
    console.log('user disconnected ');
  });
});

//app.listen(5000,() => console.log("Server is Active..."));

server.listen(5000, () => {
    console.log("The server is listening at port 5000...");
})