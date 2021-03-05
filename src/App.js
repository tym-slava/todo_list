import React, { Component } from 'react';
// import Button from '../src/components/Button/index.js';

import './App.css';



class App extends Component {
  state = 
    {text: "",
    count: 0,
  }

  getValue = (event) => {
    let val = event.target.value;
    this.setState({text: val})
    return val;
  }

  addtask = () => {
    let div = document.querySelector('.task-container');
    let task = this.state.text
    return div.innerHTML += `${task} <br/>`;
  }
 

  render() {
    let oldCount = this.state.count;
    

   return (
     <div className='App'>
      <h1>TODO LIST</h1>
        <input type='text' placeholder='Enter some task...' className='inp' onChange={this.getValue}/>
        <button className='btn' onClick={this.addtask}>SAVE</button>
        <div className="task-container">
          <p>{`${oldCount} tasks`}</p>
          
        </div>

     </div>
   )
  } 
}

export default App;
