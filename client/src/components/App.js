import React from 'react';
import spoonacular from '../apis/spoonacular';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class App extends React.Component {
  state = { recipes: [], selectedRecipe: null };

  componentDidMount() {
    this.onTermSubmit('chocolate');
  }

  onTermSubmit = async (term) => {
    const response = await spoonacular.get('/complexSearch', {
      params: {
        query: term,
      },
    });

    this.setState({
      recipes: response.data.results,
      selectedRecipe: response.data.results[0],
    });
  };

  onRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <RecipeDetail recipe={this.state.selectedRecipe} />
            </div>
            <div className="five wide column">
              <RecipeList
                recipes={this.state.recipes}
                onRecipeSelect={this.onRecipeSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
