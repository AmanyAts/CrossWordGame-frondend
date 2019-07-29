import React, {Component} from 'react';
import {show} from './ScoresApi'

class ScoreShow extends Component{
    state = {
        score:{
            level:1
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const scoreId = this.props.scoreId;
        show(user,scoreId)
        .then((response) => {
            const showLevel = response.data.scores.level;
            this.setState({
                score:{
                    level:showLevel
                }
            })
        })
        .catch((error) => console.log(error))
    }



    render(){
        // console.log(this.props.memeId)
        return(
            <div>
                <h1>
                 show</h1>
                <h1>{this.state.meme.title}</h1>
               <h2>{this.state.meme.imageUrl}</h2>
            </div>
        )
    }
}



export default ScoreShow