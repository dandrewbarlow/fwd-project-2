// getRecipes.js

/**
 * getRandomRecipes returns an array of random recipes from the spoonacular API
 * @param {number} numberOfRecipes - the number of random recipes to return
 */
export default function getRandomRecipes(numberOfRecipes) {
  let query = new URL("https://api.spoonacular.com/recipes/random");

  // ! in order to run, must have API key defined in .env as REACT_APP_API_KEY
  let API_KEY = process.env.REACT_APP_API_KEY;

  // api settings for random recipes found here:
  // https://spoonacular.com/food-api/docs#Get-Random-Recipes
  let options = {
    apiKey: API_KEY,
    number: numberOfRecipes,
  };

  query.search = new URLSearchParams(options);

  let data = fetch(query)
    .then((data) => data.json())
    .then((d) => {
      return d;
    });
  return data;
}
