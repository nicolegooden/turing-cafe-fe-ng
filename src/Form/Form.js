import React, { Component } from 'react';
import './form.css';
import { postNewReservation } from '../apiCalls.js';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
      //this.state.number will be parsed to an integer within the POST request's body
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmission = async () => {
    await postNewReservation(this.state.name, this.state.date, this.state.time, this.state.number)
    .then(response => this.props.makeReservation(response))
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render() {
    return (
      <section>
        <input type='text' onChange={this.handleChange} name='name' value={this.state.name} placeholder='Name'></input>
        <input type='text' onChange={this.handleChange} name='date' value={this.state.date} placeholder='Date (mm/dd)'></input>
        <input type='text' onChange={this.handleChange} name='time' value={this.state.time} placeholder='Time'></input>
        <input type='number' onChange={this.handleChange} name='number' value={this.state.number} placeholder='Number of guests'></input>
        <button onClick={this.handleSubmission}>Make Reservation</button>
      </section>
    )
  }
}

export default Form;