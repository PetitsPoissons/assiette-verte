import './RecipeItem.css';
import React from 'react';

const RecipeItem = ({ recipe, onRecipeSelect }) => {
  return (
    <div className="recipe-item item" onClick={() => onRecipeSelect(recipe)}>
      <img className="ui image" src={recipe.image} alt={recipe.title} />
      <div className="content">
        <div className="header">{recipe.title}</div>
      </div>
    </div>
  );
};

export default RecipeItem;
