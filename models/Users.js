const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: 4,
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
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