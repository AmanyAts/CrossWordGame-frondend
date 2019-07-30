import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        destroy(user,this.props.user,scoreId)
        .then(()=> alert('deleted'))
        .then(()=>{
          const newScores = this.state.memes.filter((score) => score._id !== scoreId)
          this.setState({
            scores: newScores
          })
      })
      .catch(error => console.log(error))
       
        
    }
    render() {
        
        return (
            <div>
                 {                    
                    this.state.scores.map((score,index) => (
                   <div key={index}>
                        <h2>{score.time}  <spn id='del'><button  onClick={()=>this.destroy(this.props.user,score._id)}>X</button></spn></h2>
                       
                    </div>
                ))}
            </div>
        );
    }
}

export default Result;