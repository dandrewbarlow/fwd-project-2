import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    var container = {
      width: "75%",
      margin: "auto",
    };
    var buttonStyle = {
      background: "white",
      border: "2px solid white",
      marginTop: "-1%",
      float: "left",
    };
    return (
      <li key={this.props.object.id}>
        <span>{this.props.object.name}</span>
        <button style={buttonStyle}>Click</button>
      </li>
    );
  }
}
