import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <div id="recipes" className="recipes">
      {recipes.map((hit, index) => (
        <Recipe
          key={index}
          title={hit.recipe.label}
          image={hit.recipe.image}
          calories={hit.recipe.calories}
          ingredients={hit.recipe.ingredientLines}
          more={hit.recipe.url}
          recipe={hit.recipe}
          healthLabels={hit.recipe.healthLabels}
          dietLabels={hit.recipe.dietLabels}
          cuisineType={hit.recipe.cuisineType}
        />
      ))}
    </div>
  );
}

export default RecipeList;
