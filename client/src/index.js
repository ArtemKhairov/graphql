import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Кэгирование запросов
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// клиент для кеширования запросов
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
