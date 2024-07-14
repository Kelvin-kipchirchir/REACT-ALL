import React, { Component } from 'react';

class Clock extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           date:new Date()
       }
       setInterval(() => this.setTime(),1000)
   }
   //end of contructor
   setTime(){
       console.log(this.state.date);
       this.setState((state,props) =>(
           {
               date:new Date()
           }
       ))
   }
   render(){
       return(
          
           <div>
                <h1>Hello</h1>
               <p>The current time is {this.state.date.toString()}</p>
               </div>
       )
   }
}
export default Clock;