import React, { Component } from "react";
import "./App.css";
import ListContainer from "./ListContainer";
import RecipeList from "./RecipeList";
import getRandomRecipes from "./getRecipes";
import ReactHTMLParser from "react-html-parser";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      selectedRecipe: {},
    };
  }

  /**
   * on mount fetch recipes and store them in state
   */
  componentDidMount() {
    getRandomRecipes(5)
      .then((r) => {
        this.setState({
          recipes: r.recipes,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {

    // Construct lists

    // listContainers has both the Shopping List and Instructions
    let listContainers = [];

    // check if a recipe is selected
    if (Object.entries(this.state.selectedRecipe).length !== 0) {
      listContainers = [

        // Shopping List
        <ListContainer
          title="Shopping List"
          recipe={this.state.selectedRecipe}
          key={this.state.selectedRecipe.id + "ingredients"}
        />,

        // Instructions
        <ListContainer
          title="Instructions"
          recipe={this.state.selectedRecipe}
          // ? NOTE: using new library - ReactHTMLParser
          // Spoonacular API returns html list for instructions, this is a safe
          // and easy way to translate that to a list
          listItems={ReactHTMLParser(this.state.selectedRecipe.instructions)}
          key={this.state.selectedRecipe.id + "instructions"}
        />
      ];
    }

    return (
      <div>
        <h1>Recipe Project</h1>

        <RecipeList
          recipes={this.state.recipes}
          selectRecipe={(r) => {
            this.setState({
              recipes: this.state.recipes,
              selectedRecipe: r,
            });
          }}
        />

        {listContainers}

      </div>
    );
  }
}
