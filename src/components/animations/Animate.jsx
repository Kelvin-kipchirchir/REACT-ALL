import React from 'react'
import { Transition } from 'react-transition-group'
class Animate extends React.Component{
    constructor(props){
        super(props);

        this.duration = 2000;
        this.defaultStyle = {
            transition: 'opacity ${this.duration } ms ease-in-out',
            opacity : 0
        }
        this.transitionStyles = {
            entering: { opacity: 1},
            entered: { opacity: 1},
            exiting: { opacity: 0},
            exiting: { opacity: 0},
        };
        this.state = {
            inProp: true
        }
        setInterval(() =>{
            this.setState((state,props) =>{
                let newState = {
                    inProp: !state.inProp
                };
                return newState;
            })
        },3000);
    }
    render(){
        return(
            <div>
                <h1>Simple ANIMATION</h1>
                <Transition in={this.state.inProp} timeout={this.duration}>
                    {
                        state => (
                            <div style={{
                                ...this.defaultStyle,
                                ...this.transitionStyles[state]
                            }}>
                            <h1>Hello world!!</h1>
                            </div>
                        )
                    }

                </Transition>
            </div>
        )
    }
}
export default Animate;