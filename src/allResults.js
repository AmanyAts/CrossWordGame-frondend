import React, { Component } from 'react';
import { indexAll } from './ScoresApi';

class AllResults extends Component {
    state={
        scores:[]
    }
    componentDidMount(){
      
        indexAll()
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
                        <h1>{score.time}</h1>
                    </div>
                ))}

            </div>
        );
    }
}

export default AllResults;