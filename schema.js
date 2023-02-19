const { gql } = require('apollo-server-express');

//blah
exports.typeDefs = gql `
    type User {
        id: ID
        username: String
        email: String
        password: String
    }

    type Employee {
        id: ID
        first_name: String!
        last_name: String!
        email: String
        gender: String
        salary: Float!
    }

    type Query {
        users: [User]
        user(id: ID!): User
        employees: [Employee]
        employee(id: ID!): Employee
    }

    type Mutation {
        createUser(
            username: String
            email: String
            password: String
        ): User


        updateEmployee(id: String!
            firstname: String!
            lastname: String!
            email: String!
            gender: String!
            city: String!
            designation: String!
            salary: Float!): Employee
        
        deleteEmployee(id: String!): Employee
    }
`