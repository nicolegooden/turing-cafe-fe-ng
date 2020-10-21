import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
      //remember to use parseInt on this.state.number (comes in as string)
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmission = () => {
    const newRes = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
      //Do I need to create my own id since a POST is not being made yet?
    }
    this.props.makeReservation(newRes);
    this.setState({name: '', date: '', time: '', number: ''})
    //I want to set the state of the number key back to null, but this does not
    //clear the input on submission... will check back on this later if time permits.
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