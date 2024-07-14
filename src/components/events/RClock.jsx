import React, { Component } from 'react'

class RClock extends Component{
    constructor(props){
        super(props);
        this.state = {
             date: new Date() 
            }
    }
    //add componentDidMount() method and call setInterval() to update the date and time every second. Also, store the reference to stop updating the date and time later.
    componentDidMount() { 
        this.setTimeRef = setInterval(() => this.setTime(), 1000); 
    }
    //componentWillUnmount() method and call clearInterval() to stop the date and time update calls.
    componentWillUnmount() { 
        clearInterval(this.setTimeRef) 
    }
    setTime() { 
        this.setState((state, props) => {
             console.log(state.date); 
             return {
                  date: new Date() 
                } }) }

    render(){
        return(
            <div>
                <h1>React Life cycle</h1>
                <div><p>The current time is {this.state.date.toString()}</p></div>
            </div>
        )
    }
}
export default RClock;