import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Please type some thing!");
    }
    onSubmit(search);
    setSearch("");
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Find Your Favorite Recipe</h1>
        <form className="search-form" onSubmit={getQuery}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={handelSearch}
          ></input>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
