module.exports = function(req, res, next) {
  res.sendHttpError = function(error) {
    res.status(error.status);

    res.req.headers["x-requested-with"] === "XMLHttpRequest"
      ? res.json(error)
      : res.render("error", { error: error });
  };

  next();
};
