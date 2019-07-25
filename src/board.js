import React, { Component } from 'react';
import './board.css'
// import Box from './box'
import $ from "jquery";
class Board extends Component {
    
    state={
        // Rand:0
     words:['cat', 'tomatoe', 'paris', 'dog'],
     words1:['Jeddah', 'Makkah', 'Toronto', 'Paris'],
     words2:['Amany', 'Ali', 'attas'],
     wordsLetter:[],
     selectedWord:"",
     RandomIndex:[],
     letters:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
     gameBoardDemo1: [
         '', 'c', '', '', '', '', '',
         '', 'a', '', '', '', '', '',
         'd','t', '', '', '', '', '',
         '', 'o', 'p', 'a', 'r', 'i', 's',
         '', '', 'g', '', '', '', '',
         't', 'o', 'm', 'a', 't', 'o', '',
         '', '', '', '', '', '', '',

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
       
    
    }
    selecting= event =>{
        
        event.preventDefault();
        if (event.type == 'mouseenter') {
            
         
        // console.log(this.state.selectedWord)
        console.log(event.target.innerText)
        // console.log(event.target.id)
        let id =event.target.id
        const char = event.target.innerText
        // event.target.style.background="blue"
        event.target.style.background = 'pink'
        const clone = this.state.selectedWord.concat(char);
        // clone.push(char)

        console.log("clone  "+clone)
        
        this.setState({
            selectedWord:clone
        })
        
        this.state.words.forEach(element=>{
            if(element==clone){
                this.setState({
                    selectedWord:""
                })
                return console.log('true')
            }else{
                if(clone.length==7 ){
                    $('.box').css("background-color", "white")
                    // event.target.style.background = ''
                    this.setState({
                    selectedWord:""
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
    
    render() {

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
        return (

            <div className="puzzle-container">
                  <div> 
                {
                      
                 // loop through empty board      
                 this.state.gameBoardDemo1.map((element,i) => { 
                    //  console.log("R "+rand) 
 
                     // get random number 0-26 for random letter in alphabet
                    if (element === "") {
                        // return this.state.RandomIndex.map(e=>(
                            ind++;
                            return <div id={i} onMouseEnter={this.selecting}  className="box">{this.state.RandomIndex[ind]}</div>
                            

                        // ))
                       
                        // return <Box onClick={this.selecting} key={i} index={i} word={letters[RandomIndex]} words={this.state.words}/>
                    } else {
                        return <div id={i} onClick={this.selecting}  className="box">{element}</div>

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
                
            </div>
        );
    }
}

export default Board;