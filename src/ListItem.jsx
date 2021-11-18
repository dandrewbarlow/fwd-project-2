import React, { Component } from 'react'
import List from './List'
import RecipeList from './RecipeList';
export default class ListItem extends Component {
    render() {
    		const listRecipe = [
      		{ key: 0,
       		  name: "Eggs"
      		},
      		{ key: 1,
        	  name: "Milk"
      		},
      		{ key: 2,
        	  name: "Flour"
      		}
    	];
    	const instructions = [
    		{ key: 3,
    		  name: "add into a bowl"
    		},
    		{ key: 4,
              name: "mix"
    		},
    		{ key: 5,
    		  name:"bake"
    		}
    	]
    	var ListSytle = {
    		margin: "10px",

    	}
    	var listLeft ={
    		float:"left",
    		position:"relative",
    		background:"orange",
    		width:"45%"
    	}
    	var listRight ={
    		float: "right",
    		position: "relative",
    		background:"orange",
    		width:"45%"    	
    	}
    	var container ={
    		width: "75%",
    		margin:"auto",
    	}
        return (
            <div style={container}>
            	<h1>Recipe Project</h1>
				<RecipeList/>
            	<div>
            		<h2>Shopping List</h2>
	                <div style={listLeft}>
	                	<ul style={ListSytle}> 
	               			{listRecipe.map(item => <li key ={item.key}> <List name={item.name} /></li>)}
	                	</ul>
	                </div>
	                <div style ={listRight}>
	                	<ul style ={ListSytle}>
	                		{listRecipe.map(item => <li key ={item.key}> <List name ={item.name}/> </li>)}
	                	</ul>
	                </div>
	            </div>

	            <div>
	            <h2>Instructions</h2>
	                <div style={listLeft}>
	                	<ul style={ListSytle}> 
	               			{instructions.map(item => <li key ={item.key}> <List name={item.name} /></li>)}
	                	</ul>
	                </div>
	                <div style ={listRight}>
	                	<ul style ={ListSytle}>
	                		{instructions.map(item => <li key ={item.key}> <List name ={item.name}/> </li>)}
	                	</ul>
	                </div>
	            </div>
            </div>
        )
    }
}
