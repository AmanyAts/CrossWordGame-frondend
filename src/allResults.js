import React, { Component } from 'react';
import { indexAll  } from './ScoresApi';

class AllResults extends Component {
    state={
        scores:[],
        users:[]

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
                       <ul>
                       <li> <p>{score.email}/{score.time}</p>
                       
                       
                        {console.log('eee '+score.email)}
                        
                        
                        </li>

                       </ul>
                       
                    </div>
                ))}

            </div>
        );
    }
}

export default AllResults;