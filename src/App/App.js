import React, { Component } from 'react';
import './App.css';
import { getExistingReservations } from '../apiCalls.js';
import ResContainer from '../ResContainer/ResContainer.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      existingReservations: []
    }
  }
  
  componentDidMount() {
    getExistingReservations()
    .then(resData => this.setState({existingReservations: resData}))
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ResContainer existingReservations={this.state.existingReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
