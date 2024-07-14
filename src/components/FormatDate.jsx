import React, { Component } from 'react';

class FormatDate extends React.Component{
    constructor(){
        super();
    }
    format(val) 
    { 
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]; 
        let parsed_date = new Date(Date.parse(val)); 
        let formatted_date = parsed_date.getDate() + "-" 
        + months[parsed_date.getMonth()] + "-" 
        + parsed_date.getFullYear() 
        return formatted_date; 
    }
    render(){
        return(
            <div>
                
                <span>{this.format(this.props.value)}</span>
            </div>
        )
    }

}
export default FormatDate;