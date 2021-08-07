import React, { useState } from "react";
import "./index.css";

import CountryList from "./CountryList";
import SearchForm from "./SearchForm";

const App = () => {
  const [search, setSearch] = useState("");

  const handleChange = event => setSearch(event.target.value);

  return (
    <div className="App">
      <h1>Country List</h1>
      <SearchForm search={search} onSearchChange={handleChange} />
      <CountryList search={search} />
    </div>
  );
};

export default App;