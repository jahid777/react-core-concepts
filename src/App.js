import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Counter></Counter>
    
    </div>
  );
}


function Counter(){
 const [count, setCount] = useState(0);
 const handleIncrease = () => {
   setCount(count+1);
 }
   const handleDecrease = () => {
    setCount(count-1);
    if(count == 0){
      setCount(count+0);
    }
 }
  return(
   <div>
    <h1>count:{count}</h1>
    <button onClick={handleIncrease}>increase</button>
    <button onClick={handleDecrease}>decrise</button>
   </div>
  );
}
export default App;
