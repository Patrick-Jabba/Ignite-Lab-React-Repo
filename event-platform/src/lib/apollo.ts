import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `https://api-sa-east-1.graphcms.com/v2/cl4o9nhhk1adk01xr9oxbe04f/master`,
  cache: new InMemoryCache()
})