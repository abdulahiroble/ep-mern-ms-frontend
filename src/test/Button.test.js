import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from '../components/Button';
import {screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'


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
