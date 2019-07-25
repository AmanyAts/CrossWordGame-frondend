import React, { Component } from 'react';

class Box extends Component {
    
    state={
        selectedWord:[],
        asWord:''
    }
    // constructor(props) {
    //     super(props);
    //     // Don't call this.setState() here!
    //      this.selectedWord=[];
    //     this.state = {  selectedWord:[] };
    //     this.selecting = this.selecting.bind(this);
    //   }
    
    
    selecting= event =>{
        
        // event.preventDefault();
        console.log(this.state.selectedWord)
        console.log(event.target.innerText)
        const char = event.target.innerText
        event.target.style.background="blue"
        const clone = this.state.selectedWord.slice();
        clone.push(char)

        console.log("clone  "+clone)
        
        this.setState({
            selectedWord:clone
        })
        
        console.log("After "+this.state.selectedWord)
    }

    render() {
        //console.log('Box comp')
       
        return (
            <React.Fragment>

            <div onClick={this.props.Click}  className="box">{this.props.word}</div>
            {/* <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div> */}
            </React.Fragment>
                
            
        );
    }
}

export default Box;