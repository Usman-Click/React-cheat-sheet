import React from 'react'

const name = 'Iphone';
var model = '14ProMax';
const list = ['james', 'mike', 'usman', 'ahmed'];

var loggenIn = false;

const styles = {
  color: 'red',
  fontSize: '12px'
}

const App = () => {
  return (
    < >

    <div className='text-6xl con'><h2>Hello, {name}</h2></div>
    <p style={styles}>You won an {name} {model}</p>


    <ul>
      {/* map() creates a new array from calling a function for every array element and assign the array name as the name of the paramter (ie: name (in here)) */}
      {list.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>

    {loggenIn ? <h3> Hello Member!</h3> : <h3>Hello User</h3>}


    </ >
  ) 
}

export default App
