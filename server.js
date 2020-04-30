const fs = require( 'fs' );
const express = require( 'express' );
const graphqlHTTP = require( 'express-graphql' );
const { buildSchema } = require( 'graphql' );

// Pull in resolvers
const root = require( './resolvers' );

// Construct a schema, using GraphQL schema language
const schemaContent = fs.readFileSync( './schema.graphql' ).toString();
const schema = buildSchema( schemaContent );

const app = express();
const port = 4000;

app.use( '/graphql', graphqlHTTP( {
  schema: schema,
  rootValue: root,
  graphiql: true,
} ) );
app.listen( port );

console.log( `Running a GraphQL API server at http://localhost:${port}/graphql` );