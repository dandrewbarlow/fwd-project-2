import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <li onClick={() => this.props.removeItem(this.props.item)}>
                {this.props.item}
            </li>
        )
    }
}
