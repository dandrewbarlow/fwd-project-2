import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {

    render() {
        let listItems = Array.isArray(this.props.listItems) && this.props.items.map( (item) => {
            <ListItem item={item} removeItem={this.props.removeItem} addItem={this.props.addItem}/>
        });

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}
