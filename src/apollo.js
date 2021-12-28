import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://movieql2.vercel.app',
  cache: new InMemoryCache()
});

export default client