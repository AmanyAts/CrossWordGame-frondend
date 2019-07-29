import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { index } from './ScoresApi';

class Result extends Component {

    state={
        scores:[]
    }
    componentDidMount(){
        const user = this.props.user
        index(user)
        .then(response => {
           const allScore = response.data.scores;
           this.setState({
               scores:allScore
           })
        })
        .catch((error) => console.log(error))
    }
    render() {
        
        return (
            <div>
                 {                    
                    this.state.scores.map((score,index) => (
                   <div key={index}>
                        <h2>{score.time}</h2>
                    </div>
                ))}
            </div>
        );
    }
}

export default Result;