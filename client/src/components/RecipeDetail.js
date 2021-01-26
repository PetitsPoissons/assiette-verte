import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return <div>{recipe.title}</div>;
};

export default RecipeDetail;
