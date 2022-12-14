import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Button from '../components/Button';
// import {screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import RegistrationForm from '../components/RegistrationForm';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

describe('Button', () => {
    it('should render a button with the provided text', () => {
        render(<Button text="Click me" />);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should call the onClick prop when clicked', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick} text="Click me" />);
        const button = screen.getByText('Click me');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});


describe('First Name', () => {
    // let cases = [[frank, true], [jasmine, false]]

    it('should have more than 2 characters', () => {
        render(<RegistrationForm />);
        const firstName = screen.getByLabelText('First name');
        fireEvent.change(firstName, {target: {value: 'abdulahi'}});
        expect(firstName.value).toBe('abdulahi');
    });
})