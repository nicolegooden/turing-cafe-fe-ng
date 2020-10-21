import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ResCard from './ResCard.js';

describe('ResCard', () => {
  it('should display all info about a reservation', () => {
    render(
      <ResCard 
        date={'11/10'}
        id={3}
        name={'Khaleta'}
        number={5}
        time={'6:45'}
      />
    )

    expect(screen.getByText('Khaleta')).toBeInTheDocument();
    expect(screen.getByText('11/10')).toBeInTheDocument();
    expect(screen.getByText('6:45 pm')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 5')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  })
})