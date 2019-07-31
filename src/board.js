import React, { Component } from 'react';
import './board.css'
import { Link } from 'react-router-dom'
import Timer from './timer'
import $ from "jquery";
import home from './home.png'
import arrows from './arrows.png'



// import {show} from './ScoresApi'

class Board extends Component {
    
    state={
        // Rand:0   
     wordss:[],
     words:['cat', 'paris','apple', 'tomato'],
     words1:['jeddah', 'rio', 'toronto', 'paris'],
     words2:['cat', 'dog', 'rabbit','alpaca'],
     words3:['english', 'french', 'chinese','arabic'],
     wordsLetter:[],
     selectedWord:"",
     idNumber:[],
     RandomIndex:[],
     flag:false,
     point:0,
     gameDirection: "",
     score:[],
     letters:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
     gameBoardNum:0,
     class:'',
     gameBoardDemo1: [
         '', 't', '', '','', '', '','', '', '', '', '','', '',
         '', 'o', '', '', '', '', '','', '', '', '', '','', '',
         '', 'r', '', '', '', '', '','', '', '', '', 'p','', '',
         '', 'o', '', '', '', '', '','r', '', '', '', 'a','', '',
         '', 'n', '', '', '', '', '','', 'i', '', '', 'r','', '',
         '', 't', '', '', '', '', '','', '', 'o', '', 'i','', '',
         '', 'o', '', '', '', '', '','', '', '', '', 's','', '',
         '', '', '', 'j', 'e', 'd', 'd','a', 'h', '', '', '','', ''
         
        

       
     ],
     gameBoardDemo2: [
        '', 'c', '', '','', '', '','', '', '', '', '','', '',
         '', 'a', '', '', '', '', '','', '', '', '', 'a','', '',
         '', 't', '', '', '', '', '','', '', '', '', 'l','', '',
         '', '', '', '', '', '', '','d', '', '', '', 'p','', '',
         '', '', '', '', '', '', '','', 'o', '', '', 'a','', '',
         '', '', '', '', '', '', '','', '', 'g', '', 'c','', '',
         '', '', '', '', '', '', '','', '', '', '',  'a','', '',
         '', '', '', 'r', 'a', 'b', 'b','i', 't', '', '', '','', ''
        

    ],
    gameBoardDemo3: [
        'e', '', '', 'c', '', '', 'a','', '', '', '', '',
        'n', '', '', 'h', '', '', '','r', '', '', '', '',
        'g', '', '', 'i', '', '', '','', 'a', '', '', '',
        'l', '', '', 'n', '', '', '','', '', 'b', '', '',
        'i', '', '', 'e', '', '', '','', '', '', 'i', '',
        's', '', '', 's', '', '', '','', '', '', '', 'c',
        'h', '', '', 'e', 'f', 'r', 'e','n', 'c', 'h', '', '',
       

   ],
   gameBoardDemo4: [
    '', 'c', '', '','', '', '','', '', '', '', '','', '',
    '', 'a', '', 't', '', '', '','', '', '', '', '','', '',
    '', 't', '', '', 'o', '', '','', '', '', '', 'p','', '',
    '', '', '', '', '', 'm', '','', '', '', '', 'a','', '',
    '', '', '', '', '', '', 'a','', '', '', '', 'r','', '',
    '', '', '', '', '', '', '','t', '', '', '', 'i','', '',
    '', '', '', '', '', '', '','', 'o', '', '', 's','', '',
    '', '', '', 'a', 'p', 'p', 'l','e', '', '', '', '','', ''
    ]
, gameBoardd:[]

    }
  
    suffle(array){
    let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	    return array;
    }

    componentDidMount(){
        
        let wordClone=[]
        console.log("rrrr   "+this.props.ud)
        if(parseFloat(this.props.ud)===1){
            console.log('rrrrrrrrrr')
            wordClone=this.state.words1;
            this.setState({
                wordss:wordClone,
                gameBoardd:this.state.gameBoardDemo1.slice()
            })

        }else if(parseFloat(this.props.ud)===2){
            wordClone=this.state.words2;
            this.setState({
                wordss:wordClone,
                gameBoardd:this.state.gameBoardDemo2.slice()
            })

        }else if(parseFloat(this.props.ud)===3){
            wordClone=this.state.words3;
            this.setState({
                wordss:wordClone,
                gameBoardd:this.state.gameBoardDemo3.slice()
            })
        }else {
           console.log('fffffffffff')
            wordClone=this.state.words;
            this.setState({
                wordss:wordClone,
                gameBoardd:this.state.gameBoardDemo4.slice()
            })
        }
       
        this.setState({
            RandomIndex:this.suffle(this.state.letters) ,
        })
  
    
    }

    
    selecting= event =>{
        
        event.preventDefault();
        console.log(event.target.innerText)
        let id =event.target.id
        console.log("id: "+id)
        const copyID=this.state.idNumber;
        const gameDirectionKey = {
            right: (curr, last) => curr === last +1,
            left:  (curr, last) => curr === last -1,
            under: (curr, last) => curr === last +14,
            underR:(curr, last) => curr === last +15,
            
        }
        let gameDirection = this.state.gameDirection 
        // check that it is a valid move
        if (this.state.idNumber.length > 0) {
            let length = this.state.idNumber.length
            let lastMove =parseFloat(this.state.idNumber[length - 1])
            console.log("last "+lastMove)//2
            let currentMove=parseFloat(id) //1
            console.log("current "+currentMove)

            
            // if no gameDirection set yet
            if ( gameDirection === "") {
                // to the right
                if(currentMove ===lastMove+1) {
                    gameDirection = "right"
                // to the left
                } else if ( currentMove ===lastMove-1 ) { 
                    gameDirection = "left"
                    console.log("valid")
                     // under
                }else if(currentMove ===lastMove+14){
                    gameDirection = "under"
                 // under to the right
                }else if(currentMove ===lastMove+15){
                    gameDirection = "underR"
                }else {
                    console.log("invalid")
                    return false
                    // return false means invalid move
                }
            } else {
                console.log(this.state.gameDirection)
                console.log(gameDirectionKey[this.state.gameDirection](currentMove, lastMove))
                if (gameDirectionKey[this.state.gameDirection](currentMove, lastMove) === false) {
                    // return false means invalid move
                    
                    console.log("invalid gdk")
                    return false
                
                }
            }
        } 
        copyID.push(id)
        const char = event.target.innerText
        let clone = this.state.selectedWord;
        // event.target.style.background="blue"
        if($( event.target ).hasClass( "pink" )){
            $(event.target).removeClass('pink') 
            clone = clone.replace(char, '')
        }else{
            $(event.target).addClass('pink') 
             clone = clone.concat(char);
        
        console.log("clone  "+clone)
        
        this.setState({
            selectedWord:clone,
            idNumber:copyID,
            gameDirection: gameDirection
        })
    
        
        this.state.wordss.forEach((element,i)=>{
            if(element===clone){
                this.setState({
                    selectedWord:"",
                    flag:true,
                    idNumber:[],
                    gameDirection: '',
                })
              
                $('.pink').addClass('green')
                $('.pink').removeClass('pink')
                console.log('index  '+i)
                $(`.${i}`).addClass('line-through')
                this.setState({
                    point:this.state.point+1
                })
                return console.log('true')
            }else{
                if(clone.length===8 ){
                    $('.pink').removeClass('pink')
                    // event.target.style.background = ''
                    this.setState({
                    selectedWord:"",
                    idNumber:[],
                    gameDirection: ''
                })
                    console.log('false')
                }
               
                return false
            }
            
        })
    }
    

        
    }

    rest=()=>{
        $('.box').removeClass('pink')
        $('.box').removeClass('green')
       $('#words p').removeClass('line-through')
       this.setState({
        selectedWord:"",
        idNumber:[],
        gameDirection: '',
        point:0,
        class:'box'
    })
    }

    solvingGame=()=>{
        this.setState({
            class:'green'
        })
    }
    
    
    render() {
        console.log('iii  '+this.props.ud)
        // get random number 0-49 for random position on board
        let ind=0;
        return (

            <div className="container">
                  
                 
                      <div className="puzzle-container"> 
                   
                {
                    // loop through empty board      
                 this.state.gameBoardd.map((element,i) => { 
                     // get random number 0-26 for random letter in alphabet
                    if (element === "") {
                            ind++;
                            if(ind===this.state.RandomIndex.length-1){
                                ind=0
                            }
                            return <div id={i}  key={i} onMouseDown={this.selecting}  className="box">{this.state.RandomIndex[ind]}</div>

                    } else {
                        return <div id={i} key={i} onMouseDown={this.selecting}  className={`box ${this.state.class}`}>{element}</div>
                    }
                 }
                )
                }
                </div> 
                <div id='words'>
                  <div onClick={this.rest}><img src={arrows} alt='return' height= '20px' width='20px' /></div>
                  <Link to="/home"> <img src={home} alt="home logo" height= '20px' width='20px'/></Link> 
                        {this.state.wordss.map((e,i)=>{
                            return <p key={i} className={i}>{e}</p>
                        })}
                        <Timer scoreId={this.props.scoreId} game={this.props.ud} score={this.state.point} user={this.props.user}/>
                        <button onClick={this.solvingGame} className='play'>Solve </button>
                      </div>  
                     
            </div>
        );
    }
}

export default Board;