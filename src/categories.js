import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Categories extends Component {
    state={
        gameBoardNum:0,
        class:'',
        classW:'',
        classA:'',
        classL:''
    }
    world=()=>{
        console.log('easy')
        this.setState({
            gameBoardNum:1,
            classW:'select',
            classA:'',
            classL:''
        })
    }
    animal=()=>{
        this.setState({
            gameBoardNum:2,
            classA:'select',
            classW:'',
            classL:''

        })
    }
    lang=()=>{
        this.setState({
            gameBoardNum:3,
            classL:'select',
            classA:'',
            classW:'',
        })
    }
    
    render() {
        return (
            <div className='categories'>
               
                <button className='cat'>Random</button>
                 <button onClick={this.world} className={`cat ${this.state.classW}`}>World cities</button>
                 <button onClick={this.animal}  className={`cat ${this.state.classA}`}>Animals</button>
                 <button onClick={this.lang} className={`cat ${this.state.classL}`}>Lagngues</button>

                    <button className='playbutton' id ='play'><Link to={`/board/${this.state.gameBoardNum}`}>Play</Link></button>
               
            </div>
        );
    }
}

export default Categories;