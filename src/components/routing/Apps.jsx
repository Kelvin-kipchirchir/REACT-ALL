import React from 'react'; 
import Home from './Home' 
import Entry from './Entry' 
import EntryForm from './EntryForm' 
import './App.css'

import { 
    BrowserRouter as Router, 
    Link,Routes,
    Route 
} from 'react-router-dom'

function Apps() { 
    return ( 
    <Router> 
        <div> 
            <nav> 
                <ul> 
                    <li> <Link to="/">Home</Link> </li> 
                    <li> <Link to="/list">List Expenses</Link> </li>
                     <li> <Link to="/add">Add Expense</Link> </li> 
                     </ul> 
            </nav> 
            <Routes>  
                <Route path="/" element={ <Home/> }/>
                <Route path="/list" element={ <Entry/> }/>
                <Route path="/add" element={ <EntryForm/> }/>
             </Routes> 
             
      </div> 
</Router> ); 
}
export default Apps;
