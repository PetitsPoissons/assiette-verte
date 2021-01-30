import React from 'react';

const RecipeDetail = ({ selectedRecipe }) => {
  if (!selectedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        className="ui image"
        src={selectedRecipe.image}
        alt={selectedRecipe.title}
      />
      <div className="ui segment">
        <h4 className="ui header">{selectedRecipe.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }} />
      </div>
    </div>
  );
};

export default RecipeDetail;
