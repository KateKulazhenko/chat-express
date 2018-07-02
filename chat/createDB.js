import mongoose from "mongoose";
import User from "./models/user";

const open = callback => {
  return mongoose.connection.on("open", callback);
};

const dropDatabase = () => {
  const db = mongoose.connection;
  return db.dropDatabase();
};

mongoose.connection.on("open", function() {
  const db = mongoose.connection;
  db.dropDatabase(function(err) {
    if (err) throw err;

    console.log("OK");
    mongoose.disconnect();
  });
});
