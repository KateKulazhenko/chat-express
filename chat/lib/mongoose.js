import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/chat",
  {
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    }
  }
);

module.exports = mongoose;
