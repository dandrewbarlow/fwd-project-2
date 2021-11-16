import React, { Component } from 'react'

export default class List extends Component {
	constructor(props){
		super(props);

	}

    render() {
    	
    	var container ={
    		width: "75%",
    		margin:"auto",
    	}
    	var buttonStyle ={
    		background: "white",
    		border:"2px solid white",
    		marginTop:"-1%",
    		float:"left"

    	} 
        return (
        	<div >
        		<span>{this.props.name}</span>
            	<button style={buttonStyle}>Click</button>
            </div>
        
        );
    }
}
