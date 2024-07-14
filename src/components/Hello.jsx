import React, { Component } from 'react';
import './hello.css';
import Format from './Format';
import FormatDate from './FormatDate';

class Hello extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="itemStyle">
                <h1>Hello world this is React</h1>
                <p>Welcome to react world fellow programmer!!!</p>
                <div>
                    <b>Item:</b> <em>{this.props.list.name}</em></div> 
                    <div><b>Amount:</b> <em> <Format value={this.props.list.amount} /> </em> </div> 
                    <div><b>Spend Date:</b> <em> <FormatDate value={this.props.list.spendDate} /> </em> </div> 
                    <div><b>Category:</b> <em>{this.props.list.category}</em></div>
            </div>
        )
    }


}
export default Hello;