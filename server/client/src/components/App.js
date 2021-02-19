import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import SearchSpoonacular from './SearchSpoonacular';
import RecipeCreate from './recipes/RecipeCreate';
import RecipeDelete from './recipes/RecipeDelete';
import RecipeEdit from './recipes/RecipeEdit';
import RecipeList from './recipes/RecipeList';
import RecipeShow from './recipes/RecipeShow';

const App = () => {
  return (
    <div>
      {/* <div className="ui container">
        <p>Hi there</p>
        <a href="/auth/google">Sign in with Google</a>
      </div> */}
      <BrowserRouter>
        <div>
          <Route path="/" exact component={RecipeList} />
          <Route path="/recipes/new" exact component={RecipeCreate} />
          <Route path="/recipes/edit" exact component={RecipeEdit} />
          <Route path="/recipes/delete" exact component={RecipeDelete} />
          <Route path="/recipes/show" exact component={RecipeShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
