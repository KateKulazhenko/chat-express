import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import ejs from "ejs-locals";
import config from "./config/config";
import session from "express-session";
import http from "http";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import sendErrors from "./middleware/sendHttpError";

const app = express();
const MongoStore = require("connect-mongo")(session);

mongoose.connect("mongodb://localhost/chat");

// view engine setup
app.engine("ejs", ejs);
app.set("views", __dirname, "/templates");
app.set("view engine", "ejs");

app.get("env") === "development"
  ? app.use(logger("dev"))
  : app.use(logger("default"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.use((req, res, next) => {
  req.session.numberOfVisit = req.session.numberOfVisit + 1 || 1;
  res.send("Visit: " + req.session.numberOfVisit);
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(sendErrors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
