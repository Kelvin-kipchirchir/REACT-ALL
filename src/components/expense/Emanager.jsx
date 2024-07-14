import React, { Component } from 'react';
import './Emanager.css';

class Emanager extends Component{
    constructor(props){
        super(props);
        this.state = { 
            items: this.props.items 
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(); 
        this.handleMouseLeave = this.handleMouseLeave.bind(); 
        this.handleMouseOver = this.handleMouseOver.bind();
    }
    handleMouseEnter(e){
        e.target.parentNode.classList.add("highlight");
    }
    handleMouseLeave(e){
        e.target.parentNode.classList.remove("highlight");
    }
    handleMouseOver(e){
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }
    handleDelete = (id, e) => { 
        e.preventDefault(); 

        if(this.props.onDelete != null) 
        this.props.onDelete(id, e);
        console.log(id); 
        
        this.setState((state, props) => { 
            let items = [];
             state.items.forEach((item, idx) => {
                 if(item.id != id) 
                 items.push(item) 
                }) 
                
                 let newState = { 
                     items: items 
                    } 
                 return newState; 
                }) 
                }
                
    getTotal() {
        let total = 0; 
        for(var i = 0; i < this.state.items.length; i++) { 
            total += this.state.items[i].amount } 
            return total;
        }
    static getDerivedStateFromProps(props, state) 
    { 
        let newState = { items: props.items } 
    return newState; 
    }
    //     componentDidMount() 
    //     { 
    //         console.log("lists :: Initialize :: componentDidMount :: Component mounted");
    // } 
    //     shouldComponentUpdate(nextProps, nextState) 
    //     { 
    //         console.log("lists :: Update :: shouldComponentUpdate invoked :: Before update"); 
    //         return true; 
    //     } 
    //     static getDerivedStateFromProps(props, state) {
    //          console.log("lists :: Initialize / Update :: getDerivedStateFromProps :: Before update"); 
    //          return null; } 
    //     getSnapshotBeforeUpdate(prevProps, prevState) {
    //          console.log("lists :: Update :: getSnapshotBeforeUpdate :: Before update");return null;
    //          } 
    //     componentDidUpdate(prevProps, prevState, snapshot) {
    //          console.log("lists :: Update :: componentDidUpdate :: Component updated"); 
    //         } 
    //     componentWillUnmount() { 
    //         console.log("lists :: Remove :: componentWillUnmount :: Component unmounted"); 
    //     }

    render(){
        const lists = this.props.items.map( (item) => 
        <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}> 
        <td>{item.name}</td>
        <td>{item.amount}</td> <td>{new Date(item.spendDate).toDateString()}</td> <td>{item.category}</td> 
        <td><a href="#" onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
        </tr>
    );
    return(
        <div>
        {/* <div>{this.props.header}</div> */}
        <table onMouseOver={this.handleMouseOver}> 
             <thead> 
                <tr> 
                   <th>Item</th> 
                   <th>Amount</th> 
                   <th>Date</th> 
                   <th>Category</th> 
                   <th>Remove</th>
                </tr> 
            </thead> 
            <tbody>  
              {lists} 
              <tr> 
                  <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td> 
                  <td colSpan="4" style={{ textAlign: "left" }}> {this.getTotal()} </td> </tr>
            </tbody> 
        </table>
        {/* <div>{this.props.footer}</div> */}
        </div>
    );
      
    }
}
export default Emanager;