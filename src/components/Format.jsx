import React, { Component } from 'react';

class Format extends React.Component{
    constructor(){
        super();
    }
    format(amount) 
    { 
        return parseFloat(amount).toFixed(2) 
    }
    render(){
        return(
            <div>
                <span>{this.format(this.props.value)}</span>
            </div>
        )
    }

}
export default Format;