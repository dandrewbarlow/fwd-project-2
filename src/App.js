import './App.css';
import getRandomRecipes from './getRecipes';

function populateRecipes(n) {
  let recipes = getRandomRecipes(5)

  return recipes;
}

function App() {

  let recipes = populateRecipes(1)

  console.log(recipes);

  return (
    <div>
      hello
    </div>
  );
}

export default App;
