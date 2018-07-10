module.exports = io => {
  io.on("connection", function(socket) {
    console.log(socket);

    socket.on("message", function(text, cb) {
      socket.broadcast.emit("message", text);
      cb();
    });
  });
};
