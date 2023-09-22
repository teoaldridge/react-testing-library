This repo was created following this tutorial,
which was reccomended by the original React Testing Library docs:
https://www.robinwieruch.de/react-testing-library/

## To run the tests:

type 'npm run test'

# Notes

### SEARCH TYPES

These are all the different search types available in RTL:

getBy search types:

- getByText
- getByRole
- getByLabelText
- getByPlaceholderText
- getByAltText
- getByDisplayValue

queryBy search types:

- queryByText
- queryByRole
- queryByLabelText
- queryByPlaceholderText
- queryByAltText
- queryByDisplayValue

findBy search types:

- findByText
- findByRole
- findByLabelText
- findByPlaceholderText
- findByAltText
- findByDisplayValue

Of them, getByText and getByRole should generally be your go-to
search types to select elements from your rendered React components with React Testing Library.

## SCREEN.DEBUG()

Adding the screen.debug() function in your test will console.log the html structure of your component.
The debug() method can be used to view the virtually rendered DOM.
! You should place screen.debug() just below your render(). For example:

```JavaScript
render(<AddUser />);
screen.debug();
```

## SCREEN.GETALLBYROLE()

Adding the screen.getAllByRole('') or just getByRole('') funcion in your test will console.log all selectable roles if you provide a role that isn't available in the rendered component's HTML (like leave it an empty string:'').

### SEARCH VARIANTS

The search variants in RTL are:

- getBy
- queryBy
- findBy

### When to use queryBy:

#### getBy VS queryBy:

We prefer to use queryBy in order to assert elements which aren't there.
(If you try to use getBy, it would not be able to even find the element- so it won't even get to the assertion).

### When to use findBy:

The findBy search variant is used for asynchronous elements which will be there eventually.

## MULTIPLE ELEMENTS

All search variants can be extended with the All word:

- getAllBy
- queryAllBy
- findAllBy

## ASSERTIVE FUNCTIONS

Usually all these assertive functions origin from Jest/Vitest (and therefore Chai). However, React Testing Library extends this API with its own assertive functions like toBeInTheDocument. All these assertive functions come in an extra package which are already set up for you when using create-react-app.

- toBeDisabled
- toBeEnabled
- toBeEmpty
- toBeEmptyDOMElement
- toBeInTheDocument
- toBeInvalid
- toBeRequired
- toBeValid
- toBeVisible
- toContainElement
- toContainHTML
- toHaveAttribute
- toHaveClass
- toHaveFocus
- toHaveFormValues
- toHaveStyle
- toHaveTextContent
- toHaveValue
- toHaveDisplayValue
- toBeChecked
- toBePartiallyChecked
- toHaveDescription

## FIRE EVENT: SIMULATING USER INTERACTIONS

We can use RTL's fireEvent and waitFor functions to simulate interactions of an end user.

In tests with fireEvent, you need to address the asynchronous behaviour: You need to wait for the event to be fired, and then do an assertion.
You can use "async await" or "waitFor" in your tests in which you fire events (see examples in App.test.js)

## USER EVENT

The userEvent API mimics the actual browser behavior more closely than the fireEvent API. For example, a fireEvent.change() triggers only a change event whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.

## CALLBACK HANDLERS

example:

- Jest
  const onChange = jest.fn();
- Vitest
  const onChange = vi.fn();

See Search.test.js

## ASYNCHRONOUS / ASYNC

Look at my other repo: react-testing-library-async for an example of testing async. It is a small example for testing data fetching in React. It tests a React component which uses axios for fetching data from a remote API.

```

```
