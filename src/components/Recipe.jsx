import React from "react";
import style from "./recipe.module.css";
import { Link } from "react-router-dom";

function Recipe({
  title,
  calories,
  image = "https://github.com/HaochenQ/Recipe_App/blob/main/src/loading.png",
  ingredients = [],
  more,
  recipe,
}) {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="img"></img>

      <div className={style.details}>
        <h1>{title}</h1>
        <p>Calorise: {calories.toFixed(2)} KJ</p>
        <p>Ingredients:</p>
        <ol>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <button
          className={style.button}
          // onClick={() => {
          //   window.location.href = more;
          // }}
          type="button"
        >
          <Link
            to={{
              pathname: `/result/${title}`,
              state: recipe,
            }}
          >
            More Details
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Recipe;
