import React, { useState, useEffect } from 'react';

function HClock() { 
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

useEffect( () => { 
    let setTime = () => { console.log("setTime is called"); 
    setCurrentDateTime(new Date()); 
} 
let interval = setInterval(setTime, 1000); 
    return () => { 
        clearInterval(interval);
     } },
         [] 
    );
    return ( 
    <div>
        <p>The current time is {currentDateTime.toString()}</p></div> 
        ); 
    }  
export default HClock;