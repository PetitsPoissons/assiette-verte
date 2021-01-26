import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
  const renderedList = recipes.map((recipe) => {
    return <RecipeItem recipe={recipe} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default RecipeList;
