const User = require('./models/Users');
const Employee = require('./models/Employees');


exports.resolvers = {
    Query: {
        login: async (parent, {username, email, password}) => {
            const user = await User.findOne({ username, email });
            console.log(user.username, user.email, user.password);
            console.log(user);
            if(!username){
                return JSON.stringify({statis: false, "message": "No Username Found"});
            }

            if(!email){
                return JSON.stringify({statis: false, "message": "No Email Found"});
            }

            if (!password){
                return JSON.stringify({statis: false, "message": "Password is incorrect"});
            }

            return user;
        },
        getEmployees: async (parent, args) => {
            return Employee.find({})
        },
        getEmployeeByID: async (parent, args) => {
            return Employee.findById(args.id)
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            console.log(args)

            let newUser = new User({
                username: args.username,
                email: args.email,
                password: args.password
            })

            return newUser.save()
        },

        addEmployee: async (parent, args) => {
            
            let newEmp = new Employee({
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                gender: args.gender,
                salary: args.salary
            })

            return newEmp.save()
        },

        updateEmployee: async (parent, {id, input}) => {
            if (!id){
                return JSON.stringify({statis: false, "message": "No ID Found"})
            }
            let employee = await Employee.findByIdAndUpdate(id, input, {new: true});
            return employee
        },

        deleteEmployee: async (parent, args) => {
            if (!args.id){
                return JSON.stringify({statis: false, "message": "No ID Found"})
            }
            let employee = await Employee.findByIdAndDelete(args.id);
            return employee
        }
    }
}
