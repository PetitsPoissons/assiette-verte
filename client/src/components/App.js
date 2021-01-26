import React from 'react';
import spoonacular from '../apis/spoonacular';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class App extends React.Component {
  state = { recipes: [], selectedRecipe: null };

  onTermSubmit = async (term) => {
    const response = await spoonacular.get('/complexSearch', {
      params: {
        query: term,
      },
    });

    this.setState({ recipes: response.data.results });
  };

  onRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <RecipeDetail recipe={this.state.selectedRecipe} />
        <RecipeList
          recipes={this.state.recipes}
          onRecipeSelect={this.onRecipeSelect}
        />
      </div>
    );
  }
}

export default App;
