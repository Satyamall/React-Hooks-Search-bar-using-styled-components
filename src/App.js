
import React, { useEffect, useState } from "react";
import './App.css';
import SearchBar from './Hook/SearchBar';
import countries from "./Utils/Countries";

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let out = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSuggestions(out);
    }
    setLoading(false);
  }, [query]);

  return (
    <div className="App">
      <h1>Search bar</h1>
      <div> {query} </div>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        value={query}
        onChange={(val) => setQuery(val)}
        suggestions={suggestions}
      />
    </div>
  );
}

