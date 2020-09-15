import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const actors = ['alom', 'mokachinu', 'kuduus'];
  return (
    <div>
    
    <Counter></Counter>
    <User></User>

    <Nayok name = {actors[0]} age = {56}></Nayok>
    <Nayok name = {actors[2]}></Nayok>
    <Nayok name = {'don'}></Nayok>
    <Nayok name = {'samsu'}></Nayok>

    <MovieCounter></MovieCounter>
   
    </div>
  );
}




//this is for users api component 
function User(){
const [users, setUser] = useState([]);
useEffect(() =>{
  fetch ("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => setUser(data));
},[])
  return(
    <div>
      <h3>Dynamic users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

//this is for btn for increase and decrease component
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

//this is for dynamic data with props component
function Nayok(props){
  const design = {
    border: '1px solid red',
    color: 'green',
    margin: '5px',
    textAlign: 'center'
  }
  return(
    <div style={design}>
      <h1>ami nayok-{props.name}</h1>
  <h5>i have 5 movies in {props.age  || 30} years</h5>
    </div>
  )
}

//this is for movie count component
function MovieCounter(props){
  const [number, setNumber] = useState(0);
  const handleNumber = () =>{
    setNumber(number+1);
  }
  const handleNumberDecrease = () =>{
    setNumber(number-1);
    if(number == 0){
      setNumber(number+0)
     }
  }
  return(
    <div>
      <button onClick ={handleNumber}>add movies</button>
      <button onClick ={handleNumberDecrease}>remove movies</button>
      <h2>number of movie:{number}</h2>
      <MovieDisplay movie ={number}></MovieDisplay>
      <MovieDisplay movie ={number+10}></MovieDisplay>
      <MovieDisplay movie ={number}></MovieDisplay>
      <MovieDisplay movie ={number}></MovieDisplay>
      <MovieDisplay movie ={number}></MovieDisplay>
    </div>
  )
}
//this is the same thing of movie counter but multiple use by props
function MovieDisplay(props){
  return(
    <h2>number of movie which made by me:{props.movie}</h2>
  )
}










export default App;
