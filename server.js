const fs = require( 'fs' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const graphqlHTTP = require( 'express-graphql' );
const { buildSchema } = require( 'graphql' );

// Pull in resolvers
const root = require( './resolvers' );

// Construct a schema, using GraphQL schema language
const schemaContent = fs.readFileSync( './schema.graphql' ).toString();
const schema = buildSchema( schemaContent );

const app = express();
const port = 4000;

function logger( req, res, next ){
  console.log( '[request.headers]:', req.headers );
  console.log( '[request.body]:', req.body );
  next(); // Passing the request to the next handler in the stack.
}

app.use( bodyParser.json() );
app.use( logger );
app.use( '/graphql', graphqlHTTP( {
  schema: schema,
  rootValue: root,
  graphiql: true,
} ) );
app.listen( port );

console.log( `Running a GraphQL API server at http://localhost:${port}/graphql` );