import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should track user flow for adding a new reservation', () => {
    //user types into form inputs - DONE
    //check values for inputs based on userEvent.type - DONE
    //user clicks on Make Reservation button to add new one - DONE
    //check that a new ResCard appears with info from inputs in Form

    render(
      <App />
    )

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('Name'), 'Guvis');
    userEvent.type(screen.getByPlaceholderText('Date (mm/dd)'), '11/11');
    userEvent.type(screen.getByPlaceholderText('Time'), '8:00');
    userEvent.type(screen.getByPlaceholderText('Number of guests'), '3');

    expect(screen.getByPlaceholderText('Name')).toHaveValue('Guvis');
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toHaveValue('11/11');
    expect(screen.getByPlaceholderText('Time')).toHaveValue('8:00');
    expect(screen.getByPlaceholderText('Number of guests')).toHaveValue(3);
    
    userEvent.click(screen.getByRole('button', { name: 'Make Reservation' }));

    expect(screen.getByPlaceholderText('Name')).toHaveValue('');
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toHaveValue('');
    expect(screen.getByPlaceholderText('Time')).toHaveValue('');
    expect(screen.getByPlaceholderText('Number of guests')).toHaveValue(null);

    expect(screen.getByText('Guvis')).toBeInTheDocument();
    expect(screen.getByText('11/11')).toBeInTheDocument();
    expect(screen.getByText('8:00 pm')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 3')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  })
})



