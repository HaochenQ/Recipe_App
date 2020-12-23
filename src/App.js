import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe";

const APP_ID = "2f780db3";
const APP_KEY = "71b5514fd4eb652e3992f2fa99dcd340";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    if (query === "") {
      return;
    } else {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);

        let intViewportHeight = window.innerHeight;
        window.scrollTo({
          top: intViewportHeight,
          left: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Please type some thing!");
    }
    setQuery(search);
    document.getElementById("recipes").style.padding = "3%";
    setSearch("");
  };

  return (
    <div className="App">
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

      <div id="recipes" className="recipes">
        {recipes.map((hit, index) => (
          <Recipe
            key={index}
            title={hit.recipe.label}
            image={hit.recipe.image}
            calories={hit.recipe.calories}
            ingredidents={hit.recipe.ingredientLines}
            more={hit.recipe.url}
          />
        ))}
      </div>
      <footer className="footer">
        <div className="text">Copyright © 2020 | Haochen</div>
      </footer>
    </div>
  );
}

export default App;
