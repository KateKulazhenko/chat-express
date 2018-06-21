const mongoose = require('mongoose'),
    config = require('../config/config.json');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/chat", {"options": {
    "server": {
        "socketOptions": {
            "keepAlive": 1
        }
    }}
});

module.exports = mongoose;