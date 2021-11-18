import React, { Component } from 'react'
import getRandomRecipes from './getRecipes'
import './RecipeList.css'

export default class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }

    }

    componentDidMount() {
        getRandomRecipes(5)
        .then(r => {
            this.setState({
                recipes: r['recipes']
            });
        })
        .catch(err => console.error(err));
    }

    getRecipeList() {
        let rList = [];
        this.state.recipes.forEach(recipe => {
            rList.push(<li key={recipe.id}>{recipe.title}</li>)
        })
        return rList;
    }

    render() {
        
        return (
            <div id="recipeList">
                <h2>Recipes</h2>

                <ul>
                    {this.getRecipeList()}
                </ul>
            </div>
        )
    }
}
