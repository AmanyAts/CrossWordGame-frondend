import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

class Categories extends Component {
    state={
        gameBoardNum:0
    }
    world=()=>{
        console.log('easy')
        this.setState({
            gameBoardNum:1
        })
    }
    animal=()=>{
        this.setState({
            gameBoardNum:2
        })
    }
    lang=()=>{
        this.setState({
            gameBoardNum:3
        })
    }
    
    render() {
        return (
            <div className='categories'>
                {/* <Dropdown className='drop'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                    <Dropdown.Item onClick={this.easy} href="#">Random</Dropdown.Item>
                        <Dropdown.Item onClick={this.easy} href="#">World cities</Dropdown.Item>
                        <Dropdown.Item  onClick={this.easy} href="#">Animals</Dropdown.Item>
                        <Dropdown.Item   onClick={this.easy} href="#">Lagngues</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                */}
                <button className='cat'>Random</button>
                 <button onClick={this.world} className='cat'>World cities</button>
                 <button onClick={this.animal}  className='cat'>Animals</button>
                 <button onClick={this.lang} className='cat'>Lagngues</button>
              

               <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                    </label> 

                    <button id ='play'><Link to={`/board/${this.state.gameBoardNum}`}>Play</Link></button>
               
            </div>
        );
    }
}

export default Categories;