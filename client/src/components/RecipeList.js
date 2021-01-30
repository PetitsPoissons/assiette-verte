import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, setSelectedRecipe }) => {
  const renderedList = recipes.map((recipe) => {
    return (
      <RecipeItem
        key={recipe.id}
        recipe={recipe}
        setSelectedRecipe={setSelectedRecipe}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default RecipeList;
