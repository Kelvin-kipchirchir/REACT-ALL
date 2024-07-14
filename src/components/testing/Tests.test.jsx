import React from 'react'
import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom';

import TestFile from ''
class Tests extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>TESTING</h1>
        )
    }
}
export default Tests;