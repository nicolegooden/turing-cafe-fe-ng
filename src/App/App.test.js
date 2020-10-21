import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should track user flow for adding a new reservation', async () => {
    //user types into form inputs - DONE
    //check values for inputs based on userEvent.type - DONE
    //user clicks on Make Reservation button to add new one - DONE
    //check that a new ResCard appears with info from inputs in Form

    render(
      <App />
    )

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('Name'), 'Hannah');
    userEvent.type(screen.getByPlaceholderText('Date (mm/dd)'), '07/11');
    userEvent.type(screen.getByPlaceholderText('Time'), '10:15');
    userEvent.type(screen.getByPlaceholderText('Number of guests'), '50');

    expect(screen.getByPlaceholderText('Name')).toHaveValue('Hannah');
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toHaveValue('07/11');
    expect(screen.getByPlaceholderText('Time')).toHaveValue('10:15');
    expect(screen.getByPlaceholderText('Number of guests')).toHaveValue(50);
    
    userEvent.click(screen.getByRole('button', { name: 'Make Reservation' }));

    const numberOfGuests = await waitFor(() => screen.getByText('Number of guests: 50'))
    expect(numberOfGuests).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Name')).toHaveValue('');
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toHaveValue('');
    expect(screen.getByPlaceholderText('Time')).toHaveValue('');
    expect(screen.getByPlaceholderText('Number of guests')).toHaveValue(null);

    expect(screen.getByText('Hannah')).toBeInTheDocument();
    expect(screen.getByText('07/11')).toBeInTheDocument();
    expect(screen.getByText('10:15 pm')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 3')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  })

  //this integration test is currently failing after implementing Iteration 4's extension (POST request)
  //if given more time, I would plan to continue to debug and also mock out the functionality
  //for the POST and GET requests.  I keep running into the issue that there are multiple matching
  //elements in the document and I believe that is due to the fact that I'm making real fetch 
  //requests and getting all of the existing data from the API (as shown via Jest)
  //please see a previous version of this file for the successful integration test before
  //I tackled iteration 4.
 
})



