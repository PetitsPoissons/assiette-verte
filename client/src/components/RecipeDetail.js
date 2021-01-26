import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img className="ui image" src={recipe.image} alt={recipe.title} />
      <div className="ui segment">
        <h4 className="ui header">{recipe.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      </div>
    </div>
  );
};

export default RecipeDetail;
