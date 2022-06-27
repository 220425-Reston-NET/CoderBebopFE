import { fireEvent, render, screen } from '@testing-library/react';
import react from 'react'
import { MemoryRouter } from 'react-router-dom';
import Mainmenu from '../routes/mainmenu/Mainmenu';
import App from '../routes/mainmenu/Mainmenu';


test("Checks buttons are in document:", () => {
    render(<MemoryRouter><Mainmenu/></MemoryRouter>);
    let depositBtn = screen.getByTestId("deposit-btn")
    expect(depositBtn).toBeInTheDocument();
    //fireEvent triggers a specific event to happen on an element:
    fireEvent.click(depositBtn);
});

test("Checks buttons are in document:", () => {
    render(<MemoryRouter><Mainmenu/></MemoryRouter>);
    let withdrawBtn = screen.getByTestId("withdraw-btn")
    expect(withdrawBtn).toBeInTheDocument();
    //fireEvent triggers a specific event to happen on an element:
    fireEvent.click(withdrawBtn);
});

test("Checks buttons are in document:", () => {
    render(<MemoryRouter><Mainmenu/></MemoryRouter>);
    let viewBtn = screen.getByTestId("view-btn")
    expect(viewBtn).toBeInTheDocument();
    //fireEvent triggers a specific event to happen on an element:
    fireEvent.click(viewBtn);
});

test("Checks buttons are in document:", () => {
    render(<MemoryRouter><Mainmenu/></MemoryRouter>);
    let transferBtn = screen.getByTestId("transfer-btn")
    expect(transferBtn).toBeInTheDocument();
    //fireEvent triggers a specific event to happen on an element:
    fireEvent.click(transferBtn);
});

