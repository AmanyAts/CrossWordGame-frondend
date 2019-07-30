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
           console.log(response)
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
                        <p>{score.time}</p>
                        <p>{score.owner}</p>
                    </div>
                ))}

            </div>
        );
    }
}

export default AllResults;