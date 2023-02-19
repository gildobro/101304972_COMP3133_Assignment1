const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
});


UserSchema.post('init', (doc) => {
    console.log('%s has been initialized to the db', doc._id);
});

UserSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
});


UserSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
})


const User = mongoose.model("User", UserSchema);
module.exports = User;