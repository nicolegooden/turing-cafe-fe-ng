import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section>
        <input placeholder='Name'></input>
        <input placeholder='Date (mm/dd)'></input>
        <input placeholder='Time'></input>
        <input placeholder='Number of guests'></input>
        <button>Make Reservation</button>
      </section>
    )
  }
}

export default Form;