import './RecipeItem.css';
import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item item">
      <img className="ui image" src={recipe.image} alt={recipe.title} />
      <div className="content">
        <div className="header">{recipe.title}</div>
      </div>
    </div>
  );
};

export default RecipeItem;
