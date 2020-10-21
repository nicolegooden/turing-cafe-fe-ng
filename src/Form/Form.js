import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
      //remember to use parseInt on this.state.number (comes in as string)
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <section>
        <input onChange={this.handleChange} name='name' value={this.state.name} placeholder='Name'></input>
        <input onChange={this.handleChange} name='date' value={this.state.date} placeholder='Date (mm/dd)'></input>
        <input onChange={this.handleChange} name='time' value={this.state.time} placeholder='Time'></input>
        <input onChange={this.handleChange} name='number' value={this.state.number} placeholder='Number of guests'></input>
        <button>Make Reservation</button>
      </section>
    )
  }
}

export default Form;