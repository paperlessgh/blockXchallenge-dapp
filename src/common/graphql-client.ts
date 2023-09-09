import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const glaphqlClient = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT!,
  cache: new InMemoryCache(),
});

export default glaphqlClient;