import React, { Component } from "react";
import ListItem from "./ListItem";

export default class ListContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      need: [],
      have: [],
    };


  }

  componentDidMount() {
    this.setState({
      need: this.props.recipe.extendedIngredients,
      have: [],
    })
  }

  /*
   * getIngredientList(objectList) returns an array of <ListItem>s for each
   * object in objectList. Specific to ingredients for spoonacular API
  */
  getIngredientList(objectList) {
    let arr = [];
    // ! crashes when not pre-verified w/ Array.isArray
    Array.isArray(objectList) &&
      objectList.forEach((object) => {
        arr.push(<ListItem key={object.id} object={object} handleClick={() => this.toggleItem(object.id)}/>);
      });
    return arr;
  }

  /*
   * toggleItem(item) switches a list items state to have or need, which
   * effects which part of the list it renders in
  */
  toggleItem(id) {

    //   need => have
    if (
      this.state.need.find(object => object.id === id) !== undefined
      && 
      this.state.have.find(object => object.id === id) === undefined
      ) {
      let li = this.state.need.find(object => object.id === id);

      console.log(li);
      console.log(li.original);

      let h = this.state.have;
      h.push(li);

      this.setState({
        need: this.state.need.filter((object) => object.id !== id),
        have: h,
      });
    }

    // have => need
    if (
      this.state.have.find(object => object.id === id) !== undefined
      &&
      this.state.need.find(object => object.id === id) === undefined
      ) {
      let li = this.state.have.find(object => object.id === id);

      console.log(li + 'random');
      console.log(li.original);

      let n = this.state.need;
      n.push(li);

      this.setState({
        need: n,
        have: this.state.have.filter((object) => object.id !== id),
      });
    }

  }

  render() {
    // ! NOTE: I changed a lot of code and haven't re-applied the style rules
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
      marginBottom: "20%",
    };

    // let listItems = [];

    // if () {
    //   listItems = this.getIngredientList(this.props.recipe);
    // }

    return (

      <div style={container}>

          <h2>{this.props.title}</h2>

          <div style={listLeft}>
            <ul>
              {this.getIngredientList(this.state.need)}
            </ul>
          </div>

          <div style={listRight}>
            <ul style={ListStyle}>
              {this.getIngredientList(this.state.have)}
            </ul>
          </div>

      </div>
    );
  }
}
