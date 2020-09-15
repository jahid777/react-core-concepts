import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    
    <Counter></Counter>
    <User></User>
    </div>
  );
}
//this is for users api
function User(){
const [users, setUser] = useState([]);
useEffect(() =>{
  fetch ("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => setUser(data));
},[])


  return(
    <div>
      <h3>Dynamic users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.title}</li>)
        }
      </ul>
    </div>
  )
}








//this is for btn for increase and decrease
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
