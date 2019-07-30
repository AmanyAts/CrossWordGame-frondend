import React, { Component } from 'react';

class Categories extends Component {
    state={
        gameBoardNum:0
    }
    easy=()=>{
        this.setState({
            gameBoardNum:1
        })
    }
    meduim=()=>{
        this.setState({
            gameBoardNum:2
        })
    }
    hard=()=>{
        this.setState({
            gameBoardNum:3
        })
    }
    
    render() {
        return (
            <div>
               <button onClick={this.easy}>Easy</button>
               <button onClick={this.meduim}>Meduim</button> 
               <button onClick={this.hard}>Hard</button> 
            </div>
        );
    }
}

export default Categories;