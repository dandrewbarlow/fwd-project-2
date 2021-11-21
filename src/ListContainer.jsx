import React, { Component } from "react";
import ListItem from "./ListItem";

export default class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unclicked: [],
      clicked: [],
    };
  }

  getIngredientList(objectList) {
    let arr = [];
    Array.isArray(objectList) &&
      objectList.forEach((object) => {
        arr.push(<ListItem key={object.id} object={object} />);
      });
    return arr;
  }

  toggleItem(item) {
    //   unclicked => clicked
    if (this.state.unclicked.indexOf(item) != -1) {
      this.setState({
        unclicked: this.state.unclicked.filter((li) => li !== item),
        clicked: this.state.clicked.push(item),
      });
    }
    // clicked => unclicked
    else if (this.state.clicked.indexOf(item) != -1) {
      this.setState({
        unclicked: this.state.unclicked.push(item),
        clicked: this.state.clicked.filter((li) => li !== item),
      });
    }
  }

  render() {
    var ListStyle = {
      margin: "10px",
    };
    var listLeft = {
      float: "left",
      position: "relative",
      background: "orange",
      width: "45%",
    };
    var listRight = {
      float: "right",
      position: "relative",
      background: "orange",
      width: "45%",
    };
    var container = {
      width: "75%",
      margin: "auto",
    };

    // let listItems = [];

    // if () {
    //   listItems = this.getIngredientList(this.props.recipe);
    // }

    return (
      <div style={container}>
        <div>
          <h2>{this.props.title}</h2>
          <div style={listLeft}>
            {this.state.unclicked}
            {this.getIngredientList(this.props.recipe.extendedIngredients)}
          </div>
          <div style={listRight}>
            <ul style={ListStyle}>{this.state.clicked}</ul>
          </div>
        </div>
      </div>
    );
  }
}
