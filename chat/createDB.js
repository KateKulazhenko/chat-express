const User = require('./models/user');

const user = new User({
    username: 'Test',
    password: 'secret'
});

user.save(function(err, user, affected) {
    if(err) throw err;
});