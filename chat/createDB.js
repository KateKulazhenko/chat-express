const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connection.on("open", function() {
  const db = mongoose.connection;
  db.dropDatabase(function(err) {
    if (err) throw err;

    console.log("OK");
    mongoose.disconnect();
  });
});
