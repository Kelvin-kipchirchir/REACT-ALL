import React, { Component } from 'react';

class EventM extends React.Component{
    constructor(props){
        super(props);
        this.logEventToConsole = this.logEventToConsole.bind();
    }
    logEventToConsole(msgid,e) 
    { 
        console.log(e.target.innerHTML); 
        console.log(msgid);

    }    
    render(){
        return(
            <div>
            <h1>Hee</h1>
            

            <div onClick={this.logEventToConsole.bind(this,Math.floor(Math.random() * 10))}>
            <p>Hello {this.props.name}!</p>
            </div>
            </div>
        )
    }
}
export default EventM;