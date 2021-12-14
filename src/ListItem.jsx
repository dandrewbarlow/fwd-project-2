import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    var buttonStyle = {
      //background: "white",
      //border: "2px solid white",
      marginTop: ".5%",
      float: "left",
      marginRight: "8px"

    };
    return (
      <li key={this.props.object.id}>
        <button style={buttonStyle} onClick={this.props.handleClick}> + </button>
        <span>{this.props.object.original}</span>
        
      </li>
    );
  }
}
