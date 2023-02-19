const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: [true, "First Name is Required"],
    },
    last_name:{
        type: String,
        required: [true, "Last Name is Required"],
    },
    email:{
        type: String,
        unique: true,
    },
    gender:{
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    salary: {
        type: Number,
        required: true
    }
});


EmployeeSchema.post('init', (doc) => {
    console.log('%s has been initialized to the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
});


EmployeeSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
})


const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;