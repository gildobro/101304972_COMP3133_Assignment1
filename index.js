const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

//import typedefs and resolvers
const TypeDefs = require('./schema')
const Resolvers = require('./resolvers')

//import ApolloServer
const { ApolloServer} = require('apollo-server-express')



// Define Apollo Server
const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers
})

// //Add Express app as middleware to Apollo Server
// server.applyMiddleware({app})

//Root Resolver
const root = {
    hello: () => `Hello World!`,
    greetings: (args) => {
        return `Hello, ${args.name}`
    },
};

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fullstackcluster.by4l3g9.mongodb.net/comp3133_assignment1`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
  console.log(err);
});

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema, //set schema
    rootValue: root, //set Resolver
    graphiql: true  //Client access
}));

app.listen(4001, ()=> console.log('Express GraphQL Server Now Running On http://localhost:4001/graphql'));