import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import rootReducer from './reducers'; 



import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import Hello from './components/Hello';
import Emanager from './components/expense/Emanager';
import EventM from './components/events/EventM';
import Clock from './components/states/Clock';
import JHooks from './components/states/JHooks';
import Emanagerfn from './components/expense/Emanagerfn';
import RClock from './components/events/RClock';
import HClock from './components/states/HClock'
import Message from './components/structures/Message';
import Pager from './components/expense/Pager';
import ExpForm from './components/expense/ExpForm';
import ExpUform from './components/expense/ExpUform';
import Apps from './components/routing/Apps';
import ExpenseList from './components/server/ExpenseList';
import Form_ik from './components/expense/Form_ik';
import Animate from './components/animations/Animate'
import Material from './components/design/Material'
import Tests from './components/testing/Tests'

const store = createStore(rootReducer);
const items = [ 
  { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
 { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" }, 
 { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" }, 
 { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
  { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" }, 
  { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" }, 
  { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" }, 
  { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" }, 
  { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" }, 
  { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" } 
]

const pageCount = 3;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> 
    <App /> 
    </Provider>, 
    document.getElementById('root') */}

    {/* { <Emanager
    items = {items}
    header={ <div><h1>Expense manager</h1></div> } 
    footer={ <div style={{ textAlign: "left" }}><p style={{ fontSize: 12 }}>Simple React App</p></div>
  }  
  /> }   */}
    {/* {<Form_ik
  />  
   <Message> 
    <h1>Containment is really a cool feature.</h1> 
  </Message> */} 

{/* {
  <Pager 
  items={items} 
  pageCount={pageCount} 
  render={ 
    pagerState => ( 
  <div> 
    <Emanager items={pagerState.items} 
    onDelete={pagerState.deleteHandler} /> 
  </div> 
  ) 
  } 
  />
} */}


<Tests/>
 
  </React.StrictMode>,
  document.getElementById('root')
);
// setTimeout(() => {
//    root.render( 
//    <React.StrictMode> 
//      <div><p>Clock is removed from the DOM.</p></div> 
//      </React.StrictMode>,
//       document.getElementById('root') ); }, 
//      5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
