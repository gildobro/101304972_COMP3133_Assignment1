const { gql } = require('apollo-server-express');


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
        login(username: String!, email: String!, password: String!): User
        getEmployees: [Employee]
        getEmployeeByID(id: ID!): Employee
    }

    input UpdateEmployeeInput {
        first_name: String
        last_name: String
        email: String
        gender: String
        salary: Float
    }

    type Mutation {
        addUser(
            username: String
            email: String
            password: String
        ): User

        addEmployee(
            first_name: String!
            last_name: String!
            email: String
            gender: String
            salary: Float!
        ): Employee

        updateEmployee(
            id: ID!
            input: UpdateEmployeeInput

        ): Employee

        deleteEmployee(id: String!): Employee
    }
`