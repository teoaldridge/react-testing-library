import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';


/* 
Always use RTL's debug function if you don't really know what's the rendered 
output of RTL's render function. After you know about the HTML structure, 
you can start to select elements with RTL's screen object's functions.
*/
describe('App', () => {
  // it('renders App component', () => {
  //   render(<App />);

  //   screen.debug();
  // });
  it('renders App component - getByText example 1', () => {
    render(<App />);

    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    //screen.getByText('Search:');

    // explicit assertion
    // recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });

  it('renders App component - getByText example2', () => {
    render(<App />);

    // fails
    //expect(screen.getByText('Search')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();

    // succeeds - using RegEx to find a match
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });

  it('renders App component - getByRole example', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  //test using the search variant "queryBy" in order to assert(check for) elements which are NOT there.
  it('renders App component - queryBy example', () => {
    render(<App />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });

  //test using the search variant "findBy" in order to assert asynchronous elements which will be there eventually.
  //We can see here that queryBy this element is Null because queryBy checks what is on the screen initially. 
  //In comparison, findBy looks for what will be there eventually after async functions are executed. 
  it('renders App component - findBy example', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });

  // test using "fire event" to simulate user interactions
  it('renders App component - fire event example', () => {

    render(<App />);


    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    screen.debug();
  });

  // fireEvent example with async await
  it('renders App component - fire event example with async await', async () => {
    render(<App />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    //expect this text to not be present at first render
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    //fire the event
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Searches for JavaScript' },
    });

    //expect this text to be present after the event
    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });

  //fireEvent example: using waitFor WITH async await (just waitfor() instead of async await didn't work for me)
  //with waitFor we literally wait for an asynchronous update to happen
  it('renders App component - fireEvent and waitFor example', async () => {
    render(<App />);

    expect(screen.queryByText(/Barbie/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Barbie' },
    });

    screen.debug();

    await waitFor(() =>
      expect(
        screen.getByText(/Barbie/)
      ).toBeInTheDocument()
    );
  });

  //using userEvent
  it('renders App component - userEvent example', async () => {
    render(<App />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(
      screen.getByText(/JavaScript/)
    ).toBeInTheDocument();
  });


});