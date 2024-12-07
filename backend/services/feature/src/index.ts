import express from 'express';
import { ApolloServer } from 'apollo-server-express';

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
};

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "0.0.0.0";
const ENV = process.env.NODE_ENV || "development";
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.get("/healthz", (req, res) => {res.status(200).send("OK")});

const main = async() => {
    await server.start();
    app.use(express.json());
    server.applyMiddleware({ app });
}

main().then(() => {
    app.listen(PORT, () => {
        console.log("Express server listening on %d, in %s mode", PORT, ENV);
    })
})