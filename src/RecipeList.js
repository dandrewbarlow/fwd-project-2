import React, { Component } from "react";

/*
 * RecipeList is a component to display random recipes for the user to select
 * The list itself is fetched from App.js using getRecipes.js and passed into this component as a prop
*/ 
export default class RecipeList extends Component {

  createRecipeList(recipeObjectList) {
    let arr = [];
    Array.isArray(recipeObjectList) &&
      recipeObjectList.forEach((recipe) => {
        arr.push(
          <li key={recipe.id}>
            <button onClick={() => this.props.selectRecipe(recipe)}>
              {recipe.title}
            </button>
          </li>
        );
      });

    return arr;
  }

  render() {
    return (
      <div id="recipeList">
        <h2>Recipes</h2>

        <ul>{this.createRecipeList(this.props.recipes)}</ul>
      </div>
    );
  }
}
