const mongoose = require('mongoose');

//define user model class
const User = mongoose.model('User', {name : String});

function saveUser() {
    const user = new User({ name : 'David'});
    user.save().then((date) => console.log(data));
}

function getUsers() {
    return User.find((err, data) => console.log(data));
}

function deleteAllUsers() {
    User.deleteMany({}, (err,data) => console.log(data));
}

exports.saveUser = saveUser;
exports.getUsers = getUsers;
exports.deleteAllUsers = deleteAllUsers;