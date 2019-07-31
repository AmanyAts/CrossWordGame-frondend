import React, { Component } from 'react';
import { index ,destroy } from './ScoresApi';

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
    destroy = (user,scoreId) => {
        console.log(this.props.user)
        destroy(this.props.user,scoreId)
        .then(()=> alert('deleted'))
        .then(()=>{
          const newScores = this.state.scores.filter((score) => score._id !== scoreId)
          this.setState({
            scores: newScores
          })
      })
      .catch(error => console.log(error))
       
        
    }
    render() {
        
        return (
            <div className='containerr'>
                <h2>History</h2>
                 {   
                                       
                    this.state.scores.map((score,index) => (
                   <div key={index} className='containerr' >
                       
                       <ul>
                           <p><span id= ''>category: {score.game===1?'World cities':`${score.game===2}`?'Animal':'Language'} | time {score.time}</span>  <a id='del' onClick={()=>this.destroy(this.props.user,score._id)}>X</a></p>
                       </ul>
                        
                       
                    </div>
                ))}
            </div>
        );
    }
}

export default Result;