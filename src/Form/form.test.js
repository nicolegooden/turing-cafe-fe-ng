import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

describe('Form', () => {
  it('should display four inputs', () => {

    const mockMakeReservation = jest.fn();

    render(
      <Form makeReservation={mockMakeReservation}/>
    )

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Number of guests')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Make Reservation' })).toBeInTheDocument();
  })

  it('should track changes based on user input', () => {
    
    const mockMakeReservation = jest.fn();

    render(
      <Form makeReservation={mockMakeReservation}/>
    )

    //put data into the form (each input) - DONE
    //check that the value entered by the user is shown in the form input
    //essentially, track changes with userEvent.type

    userEvent.type(screen.getByPlaceholderText('Name'), 'Khaleta');
    userEvent.type(screen.getByPlaceholderText('Date (mm/dd)'), '11/10');
    userEvent.type(screen.getByPlaceholderText('Time'), '6:45');
    userEvent.type(screen.getByPlaceholderText('Number of guests'), '5');

    expect(screen.getByPlaceholderText('Name')).toHaveValue('Khaleta');
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toHaveValue('11/10');
    expect(screen.getByPlaceholderText('Time')).toHaveValue('6:45');
    expect(screen.getByPlaceholderText('Number of guests')).toHaveValue(5);
  })
})

