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
