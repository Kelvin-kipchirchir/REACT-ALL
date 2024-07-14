import React, { Components } from 'react';

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>React containersitation</h1>
        <p>{this.props.children}</p>
            </div>
        )
    }
}
export default Message;