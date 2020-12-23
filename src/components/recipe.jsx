import React from "react";
import style from "./recipe.module.css";

function Recipe({
  title,
  calories,
  image = "../loading.png",
  ingredidents = [],
  more,
}) {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="img"></img>

      <div className={style.details}>
        <h1>{title}</h1>
        <p>Calorise: {calories.toFixed(2)} KJ</p>
        <p>Ingredients:</p>
        <ol>
          {ingredidents.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <button
          className={style.button}
          onClick={() => {
            window.location.href = more;
            //window.history.replaceState("", "", more);
          }}
          type="button"
        >
          More Details
        </button>
      </div>
    </div>
  );
}

export default Recipe;
