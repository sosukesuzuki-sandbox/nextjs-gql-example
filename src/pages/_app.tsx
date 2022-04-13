import { NextPage } from "next";
import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
  },
  uri: "https://api.github.com/graphql",
});

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
