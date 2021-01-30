import React, { useState } from 'react';
import spoonacular from '../apis/spoonacular';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const onTermSubmit = (event) => {
    event.preventDefault();

    const search = async (term) => {
      const response = await spoonacular.get('/complexSearch', {
        params: {
          query: term,
        },
      });
      setRecipes(response.data.results);
      setSelectedRecipe(response.data.results[0]);
    };
    search();
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onTermSubmit}>
        <div className="field">
          <label>Recipe Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <RecipeDetail selectedRecipe={selectedRecipe} />
          </div>
          <div className="five wide column">
            <RecipeList
              recipes={recipes}
              setSelectedRecipe={setSelectedRecipe}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
