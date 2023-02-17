const { gql } = require('apollo-server-express');

//blah
exports.typeDefs = gql `
    type User {
        id: ID
        username: String
        email: String
        password: String
    }

    type Query {
        users: [User]
        user(id: ID!): User
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