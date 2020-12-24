import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import SearchForm from "../components/SearchForm";

const APP_ID = "2f780db3";
const APP_KEY = "71b5514fd4eb652e3992f2fa99dcd340";

function Home() {
  let history = useHistory();
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (query) => {
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

  const handleSubmit = (query) => {
    getRecipes(query);
    history.replace(`/result`);
  };
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {/* <Switch>
        <Route path="/result"> */}
      <RecipeList recipes={recipes} />
      {/* </Route>
      </Switch> */}
    </div>
  );
}

export default Home;
