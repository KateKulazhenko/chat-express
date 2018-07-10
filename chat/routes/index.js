/* GET home page. */
module.exports = function(app) {
  app.get("/chat", require("./chat").get);
};
