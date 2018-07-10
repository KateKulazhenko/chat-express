import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import ejs from "ejs-locals";
import config from "./config/config";
import session from "express-session";

import chatRouter from "./routes/chat";
import sendErrors from "./middleware/sendHttpError";

const app = express();
const MongoStore = require("connect-mongo")(session);
const router = express.Router();

mongoose.connect("mongodb://localhost/chat");

// view engine setup
app.engine("ejs", ejs);
app.set("views", "./templates");
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: config.session.secret,
    name: config.session.kye,
    resave: true,
    saveUninitialized: true,
    cookie: config.session.cookie,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

router.use("/chat", chatRouter);

app.use("/", router);

app.use(sendErrors);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
