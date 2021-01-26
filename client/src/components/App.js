import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import spoonacular from '../apis/spoonacular';

class App extends React.Component {
  state = { recipes: [] };
  onTermSubmit = async (term) => {
    const response = await spoonacular.get('/complexSearch', {
      params: {
        query: term,
      },
    });

    this.setState({ recipes: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
