import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import SearchForm from "../components/SearchForm";

//receipe API
const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

function Home() {
  let history = useHistory();
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   console.log("state after mount:", recipes);
  // }, []);

  const getRecipes = async (query) => {
    if (query === "") {
      return;
    } else {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        if (data.hits.length === 0) {
          alert("Oops, no result found ;(");
          return;
        }

        setRecipes(data.hits);
        console.log("after fetch", data.hits);
        localStorage.removeItem("result");
        localStorage.setItem("result", JSON.stringify(data.hits));
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

  const handleSubmit = (query) => {
    localStorage.removeItem("result");
    getRecipes(query);
    history.replace(`/result`);
  };

  const results = localStorage.getItem("result")
    ? JSON.parse(localStorage.getItem("result"))
    : [...recipes];

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {/* <Switch>
        <Route path="/result"> */}
      <RecipeList recipes={results} />
      {/* </Route>
      </Switch> */}
    </div>
  );
}

export default Home;
