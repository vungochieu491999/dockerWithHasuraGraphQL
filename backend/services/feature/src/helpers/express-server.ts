import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { initRouters } from './router';

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

export async function initServerExpress() {
    const PORT = parseInt(process.env.PORT, 9000) || 9000;
    const HOST = process.env.HOST || "0.0.0.0";
    const ENV = process.env.NODE_ENV || "development";
    const app = express();
    
    app.get("/healthz", (req, res) => {res.status(200).send("OK")});
    app.use(express.json());
    
    const main = async () => {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
        });
        await server.start();
        server.applyMiddleware({ app });
    }

    await Promise.all([initRouters(app), main()])
    
    app.listen(PORT, HOST, () => {
        console.log("Express server listening on %d, in %s mode", PORT, ENV);
    });
}