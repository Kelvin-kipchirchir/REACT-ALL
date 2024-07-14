import React, { useState } from 'react'; 
function JHooks(props) 
{ 
    const [currentDateTime, setCurrentDateTime] = useState(new Date()); 
    setInterval(() => setCurrentDateTime(new Date()), 1000);
     return ( 
     <div><p>The current time is {currentDateTime.toString()}</p></div> ); 
} 
     
export default JHooks;