var express = require('express');
var { graphqlHTTP } = require('express-graphql');

var schema = require('./src/schema');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');