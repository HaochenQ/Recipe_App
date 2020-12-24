import React from "react";

function RecipeDetails(props) {
  const {
    label: name,
    image,
    ingredientLines: ingredients,
    totalWeight,
    source,
  } = props.location.state;
  return (
    <div className="recipePage">
      <section className="section cocktail-section">
        <button
          onClick={() => {
            props.history.goBack();
          }}
          className="btn btn-primary"
        >
          back home
        </button>
        <h2 className="section-title">{name}</h2>
        <div className="recipe">
          <img src={image} alt={name}></img>
          <div className="recipe-info">
            <p>
              <span className="recipe-data">name :</span> {name}
            </p>
            <p>
              <span className="recipe-data">source :</span> {source}
            </p>
            <p>
              <span className="recipe-data">weight :</span> {totalWeight} g
            </p>
            <span className="recipe-data">ingredients :</span>{" "}
            <ol>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecipeDetails;
