import axios from 'axios';

const KEY = '3e8bcb59a0184b5dbc90d95dd27b3dc5';

export default axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    diet: 'vegan',
    addRecipeInformation: true,
    addRecipeNutrition: true,
    sort: 'healthiness',
    number: 100,
    apiKey: KEY,
  },
});
