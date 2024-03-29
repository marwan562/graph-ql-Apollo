import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CharactersList from "./CharactersList.jsx";
import CharacterById from "./CharacterById.jsx";
import SearchChracters from "./SearchChracters.jsx";
import Languages from "./Pages/Languages.jsx";
import LanuageByName from "./Pages/LanuageByName.jsx";
import LanguageSearch from "./Pages/LanguageSearch.jsx";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/:id" element={<CharacterById />} />
          <Route path="/search" element={<SearchChracters />} />
          <Route path="/countries" element={<Languages />} />
          <Route path="/country/:id" element={<LanuageByName />} />
          <Route path="/countries/search" element={<LanguageSearch />} />
          <Route path="*" element={<p>Error: page 404</p>} />
        </Routes>
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);
