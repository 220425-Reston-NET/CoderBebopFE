import { fireEvent, render, screen } from '@testing-library/react';
import react from 'react'
import { MemoryRouter } from 'react-router-dom';
import Welcome from '../routes/welcome/Welcome';
/* 
    Keywords for RTL:
        - render : allows us to render a component to test
        - screen : allows us to query elements from the rendered component
            - methods for querying from the component
                - getByText() : goes through the component tree and looks for elements that specific text
                - getByTestId() : we can add an attribute to an element to retrieve it that way
                    - data-testid=""
                - getByRole() 
                    - can retrieve the role attribute in the html element
                    - if there isnt one, you can access it by the tag name
                - getPlaceholderText() : by input placeholder values
*/



test("Checks buttons are in document:", () => {
    render(<MemoryRouter><Welcome/></MemoryRouter>);

    let createBtn = screen.getByTestId("create-btn")

    expect(createBtn).toBeInTheDocument();
    //fireEvent triggers a specific event to happen on an element:
    fireEvent.click(createBtn);

});

