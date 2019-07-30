import React, { Component } from 'react';
import './board.css'

import Timer from './timer'
import $ from "jquery";
import { show } from './ScoresApi';
import { index } from './ScoresApi';
import { Button } from 'react-bootstrap';

// import {show} from './ScoresApi'

class Board extends Component {
    
    state={
        // Rand:0
     words:['cat', 'jeddah', 'paris', 'dog'],
     words1:['Jeddah', 'Makkah', 'Toronto', 'Paris'],
     words2:['Amany', 'Ali', 'attas'],
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
     gameBoardDemo1: [
         '', 'T', '', '','', '', '','', '', '', '', '','', '',
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
         '', 'a', '', '', '', '', '','', '', '', '', '','', '',
         '', 't', '', '', '', '', '','', '', '', '', 'p','', '',
         '', '', '', '', '', '', '','d', '', '', '', 'a','', '',
         '', '', '', '', '', '', '','', 'o', '', '', 'r','', '',
         '', '', '', '', '', '', '','', '', 'g', '', 'i','', '',
         '', '', '', '', '', '', '','', '', '', '', 's','', '',
         '', '', '', 'j', 'e', 'd', 'd','a', 'h', '', '', '','', ''
        

    ],
    gameBoardDemo3: [
        'b', '', '', '', '', '', 'g','', '', '', '', '',
        'a', '', '', '', '', '', '','r', '', '', '', '',
        'n', '', '', '', '', '', '','', 'a', '', '', '',
        'a', '', '', '', '', '', '','', '', 'p', '', '',
        'n', '', '', '', '', '', '','', '', '', 'e', '',
        'a', '', '', '', '', '', '','', '', '', '', '',
        '', '', '', '', 't', 'o', 'm','a', 't', 'o', '', '',
       

   ],
   gameBoardDemo4: [
    'r', '', '', '', '', '', 'g','', '', '', '', '',
    'a', '', '', '', '', '', '','r', '', '', '', '',
    'b', '', '', '', '', '', '','', 'a', '', '', '',
    'b', '', '', '', '', '', '','', '', 'p', '', '',
    'i', '', '', '', '', '', '','', '', '', 'e', '',
    't', '', '', '', '', '', '','', '', '', '', '',
    '', '', '', '', 't', 'o', 'm','a', 't', 'o', '', '',
    ],
gameBoardDemo5: [
    'a', '', '', '', '', '', 'g','', '', '', '', '',
    'p', '', '', '', '', '', '','r', '', '', '', '',
    'p', '', '', '', '', '', '','', 'a', '', '', '',
    'l', '', '', '', '', '', '','', '', 'p', '', '',
    'e', '', '', '', '', '', '','', '', '', 'e', '',
    '', '', '', '', '', '', '','', '', '', '', '',
    '', '', '', '', 't', 'o', 'm','a', 't', 'o', '', '',
   

],

    }
    // getRandom=()=>{

    //     let Rand= Math.floor(Math.random() * 49)
    //     let longestWord = 0;

    //     for(let i = 0; i < this.state.words.length; i++){
    //         let wordL =this.state.words[i].length
    //         let word=this.state.words[i]
          
    //         if(wordL==7){
    //             console.log('77')
    //             while(Rand>0 && Rand%7!=0 ){
    //                 console.log('rrrrr')
    //                 Rand= Math.floor(Math.random() * 49) 
    //             }
    //             }
                
    //             for (let i = 0; i < word.length; i++) {
                  
    //                 this.state.wordsLetter.push(word.charAt(i))
                    
    //             }
    //             console.log('apple  '+this.state.wordsLetter)

    //     }
        
        
    //     return Rand;
    // }
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
        this.setState({
            RandomIndex:this.suffle(this.state.letters) ,

            // Math.floor(Math.random() * 26)
        })
        // const user = this.props.user
        // const scoreId = this.props.scoreId;
        // index(user)
        // .then(response => {
        //     const game = response.data.scores[0].game;
        //    console.log(response)
        //    this.setState({
        //        gameBoardNum:game
        //    })
        //  })
       
    
    }
    selecting= event =>{
        
        event.preventDefault();
        // console.log(this.state.selectedWord)
        console.log(event.target.innerText)
        // console.log(event.target.id)
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
                        // under to the left
                        // over 
                        // over to the right
                        // over to the left
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
        
       
        // $(event).off("mouseenter")
        // clone.push(char)
        
        console.log("clone  "+clone)
        
        this.setState({
            selectedWord:clone,
            idNumber:copyID,
            gameDirection: gameDirection
        })
    

        // for (let i = 0; i < this.state.idNumber.length; i++) {
        //     // console.log('for')
        //     if(this.state.idNumber[i]==this.state.idNumber[i]+1){
        //         console.log('false')
        //     }
        //     // console.log(this.state.idNumber[i])
            
        // }
        
        this.state.words.forEach((element,i)=>{
            if(element===clone){
                this.setState({
                    selectedWord:"",
                    flag:true,
                    idNumber:[],
                    gameDirection: ''
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
                if(clone.length===7 ){
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
    
    // else if (event.type == 'mouseout') {
    //   event.target.style.background = ''
    // }
        
    }

    rest=()=>{
       $('.box').removeClass('pink') 
       $('.box').removeClass('green') 
       $('#words p').removeClass('line-through')
       this.setState({
        selectedWord:"",
        idNumber:[],
        gameDirection: '',
        point:0
    })
    }
    
    
    render() {
        console.log('iii  '+this.props.ud)
        // if(this.state.flag && $('.box').hasClass('pink')){
        //     console.log('llllllllllolllll')
        // }
        
        // const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        // const gameBoard = []
        
        // // create empty board of 49 spots
        // for (let index = 0; index < 49; index++) {
        //     gameBoard.push('')
            
        // }
        // const spacesForWords = {
        //     7: {
        //         vertical: [ 0, 1,2, 3, 4, 5, 6],
        //         horizontal: [0,7,14,21,28, 35, 42]
        //         // diagnol: [0, 6]
        //     }
        // }
       // console.log('long '+longestWord)
        // const endsofRow = [6, 13, 20, 27, 34, 41, 48]
        // const words = this.state.words 
        
        // words.forEach( (word, index) => {
        //     // if (index % 2 === 0) {
        //     const letters = word.split('')

        //     // if (word.length === 7) {
        //     //     const firstSpace = Math.floor(Math.random() * spacesForWords[word.length].vertical.length)
        //     //     // spacesForWords[word.length].vertical.shift()
        //     //     // const letters = word.split('')
        //     //     let counter = 0
        //     //     letters.forEach ((letter, index) => {
        //     //         gameBoard[firstSpace + counter] = letter
        //     //         counter += 7
        //     //     })
        //     //     spacesForWords[word.length].vertical = spacesForWords[word.length].vertical.filter(space => space !== firstSpace)
        //     // } else {
        //         console.log("hi")
        //         let validStartSpace = gameBoard.findIndex((space, index) => {
        //             // console.log(space, index)
        //             if (space === "") {
        //                  const potentialSpaces = [index]
        //                 //  console.log(potentialSpaces)
                        
        //                 for(let i =1; i < word.length; i++) {
        //                     potentialSpaces.push(index + i)//valis space num 
        //                 }
        //                 // console.log(potentialSpaces)
        //                 const isEmpty = potentialSpaces.every(space => {
        //                     return gameBoard[space] === ""
        //                 })
        //                 const largest = potentialSpaces.reduce((acc, curr) =>{
        //                     return acc > curr ? acc : curr 
        //                 })
        //                 const smallest = potentialSpaces.reduce((acc, curr) =>{
        //                     return acc < curr ? acc : curr 
        //                 })  
        //                 let twoRows = false  
        //                 endsofRow.forEach(end => {
        //                     if (smallest <= end && largest > end) {
        //                         twoRows = true
        //                     }
        //                 })
        //                 // console.log(isEmpty)
        //                 if (twoRows) {
        //                     return false 
        //                 }
        //                 return isEmpty
        //             } else {
        //                 return false
        //             }                    
        //         })
        //         // console.log(validStartSpace)
        //         if (validStartSpace > -1) { 
        //             let counter = 0
        //             letters.forEach ((letter, index) => {
        //                 gameBoard[validStartSpace + counter] = letter
        //                 counter += 1
        //             })
        //        }
        //     //}
        // })
                // }
            // } else {
            //     let indexx=0
            //     const firstSpace = spacesForWords[word.length].horizontal[indexx]
            //     spacesForWords[word.length].horizontal.shift()
            //     const letters = word.split('')
            //     let counter = 0
            //     const potentialSpaces = []
            //     letters.forEach ((letter, index) => {
            //         potentialSpaces.push(firstSpace + counter)
            //         counter += 1
            //     })
            //     const isEmpty = potentialSpaces.every(space => {
            //         return gameBoard[space] === ""
            //     })
            //     if (isEmpty) {
            //         counter = 0
            //         letters.forEach ((letter, index) => {
            //             gameBoard[firstSpace + counter] = letter
            //             counter += 1
            //         })
            //     }else{
            //         indexx+1;
            //     }
               
            // }
      
        // get random number 0-49 for random position on board
        // const rand=this.getRandom()
        let ind=0;
        // let gameBoardDemo=  Math.floor(Math.random() * 2);
        // console.log("dddd    "+gameBoardDemo)
        // if(gameBoardDemo==1){
        //     gameBoardDemo=this.state.gameBoardDemo1
        // }else{
        //     gameBoardDemo=this.state.gameBoardDemo2
        // }
        let gameBoardd=[];
        if(this.props.ud==1){
            
            gameBoardd=this.state.gameBoardDemo1.slice();
            console.log(gameBoardd)
        }else if(this.props.ud==2){
            gameBoardd=this.state.gameBoardDemo2.slice();
        }else if(this.props.ud==3){
            gameBoardd=this.state.gameBoardDemo3.slice();
        }
        return (

            <div className="container">
                  
                     
                      <div className="puzzle-container"> 
                {
                  
                 // loop through empty board      
                 gameBoardd.map((element,i) => { 
                    //  console.log("R "+rand) 

 
                     // get random number 0-26 for random letter in alphabet
                    if (element === "") {
                        // return this.state.RandomIndex.map(e=>(
                            ind++;
                            if(ind===this.state.RandomIndex.length-1){
                                ind=0
                            }
                            return <div id={i}  key={i} onMouseDown={this.selecting}  className="box">{this.state.RandomIndex[ind]}</div>
                            

                        // ))
                       
                        // return <Box onClick={this.selecting} key={i} index={i} word={letters[RandomIndex]} words={this.state.words}/>
                    } else {
                        return <div id={i} key={i} onMouseDown={this.selecting}  className="box">{element}</div>

                        // return <Box key={i} index={i} word={element} words={this.state.words}/>

                    }
                   // return i==rand?<Box key={i} index={i} word={ this.state.wordsLetter[0].toUpperCase()}/>:<Box key={i} word={letters[RandomIndex]}/>
                    // if(i===rand){
                    //     console.log(i)
                    //     return <Box key={i} word={}/> 
                    // }else{
                    //     console.log('not')
                    //     return <Box key={i} word={letters[RandomIndex]}/>
                    // }
                
                 }
                )
                }
                </div> 
                <div id='words'>
                        {this.state.words.map((e,i)=>{
                            return <p key={i} className={i}>{e}</p>
                        })}
                        <Timer scoreId={this.props.scoreId} score={this.state.point} user={this.props.user}/>
                        <button onClick={this.rest}>Play again</button>
                      </div>
                      

                                     
            </div>
        );
    }
}

export default Board;