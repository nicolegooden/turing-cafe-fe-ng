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
})

