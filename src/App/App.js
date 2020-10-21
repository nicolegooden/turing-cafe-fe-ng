import React, { Component } from 'react';
import './App.css';
import { getExistingReservations } from '../apiCalls.js';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  componentDidMount() {
    getExistingReservations()
    .then(resData => console.log('resData', resData))
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
