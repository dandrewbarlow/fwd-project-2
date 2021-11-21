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
   * fetch random recipes and add them to state when component is loaded
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
    let listContainers = [];

    // if there is a recipe selected, populate an array (listContainers) with <ListContainer> components that have the ingredients and instructions passed as props
    if (Object.entries(this.state.selectedRecipe).length !== 0) {
      listContainers = [
        <ListContainer
          title="Shopping List"
          recipe={this.state.selectedRecipe}
          key={this.state.selectedRecipe.id + "ingredients"}
        />,

        <ListContainer
          title="Instructions"
          recipe={this.state.selectedRecipe}
          listItems={ReactHTMLParser(this.state.selectedRecipe.instructions)}
          key={this.state.selectedRecipe.id + "instructions"}
        />
      ];
    }

    return (
      <div>
        <h1>Recipe Project</h1>

        <RecipeList
          // get recipes from state
          recipes={this.state.recipes}
          // onClick sets the clicked recipe to App.state's selectedRecipe
          selectRecipe={(r) => {
            this.setState({
              recipes: this.state.recipes,
              selectedRecipe: r,
            });
          }}
        />

        {/* Display Ingredients & Shopping Lists */}
        {listContainers}

      </div>
    );
  }
}
