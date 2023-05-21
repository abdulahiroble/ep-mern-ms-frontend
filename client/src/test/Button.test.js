// import React from 'react';
// import {render, fireEvent, screen, act} from '@testing-library/react';
// // import {screen, configure} from '@testing-library/react'
// import '@testing-library/jest-dom'
// import RegistrationForm from '../components/RegistrationForm';
// import ContactFormComponent from '../components/ContactFormComponent';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

// Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: jest.fn().mockImplementation((query) => ({
//         matches: false,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(),
//         removeListener: jest.fn(),
//         addEventListener: jest.fn(),
//         removeEventListener: jest.fn(),
//         dispatchEvent: jest.fn(),
//     })),
// });

// jest.mock('react-router-dom', () => {
//     return {
//         useNavigate: jest.fn(),
//     };
// });


// describe('First Name', () => {
//     it('Test whether first name has more than minimum 2 characters', async () => {
//         const promise = Promise.resolve()
//         render(<RegistrationForm />);
//         const firstName = screen.getByLabelText('First name');
//         fireEvent.change(firstName, {target: {value: 'abdulahi'}});

//         await act(() => promise)

//         // Valid partion test
//         expect(firstName.value.length).toBeGreaterThan(5);
//         // Invalid lower partion test
//         expect(firstName.value.length).not.toBeLessThan(1);
//         // Invalid upper partion test
//         expect(firstName.value.length).not.toBeGreaterThanOrEqual(51);
//     });
// })


// describe('Last Name', () => {
//     it('Test whether a last name has more than minimum 3 characters', async () => {
//         const promise = Promise.resolve()

//         render(<RegistrationForm />);
//         const lastName = screen.getByLabelText('Last name');
//         fireEvent.change(lastName, {target: {value: 'mohamed'}});

//         // Valid partion test
//         expect(lastName.value.length).toBeGreaterThan(5);
//         // Invalid lower partion test
//         expect(lastName.value.length).not.toBeLessThan(2);
//         // Invalid upper partion test
//         expect(lastName.value.length).not.toBeGreaterThanOrEqual(52);
//         await act(() => promise)

//     });
// })

// describe('Address', () => {
//     it('Test whether a address has more than minimum 2 characters', async () => {
//         const promise = Promise.resolve()

//         render(<RegistrationForm />);
//         const lastName = screen.getByLabelText('Address');
//         fireEvent.change(lastName, {target: {value: 'Peter bangs vej 123'}});

//         // Valid partion test
//         expect(lastName.value.length).toBeGreaterThan(5);
//         // Invalid lower partion test
//         expect(lastName.value.length).not.toBeLessThan(2);
//         // Invalid upper partion test
//         expect(lastName.value.length).not.toBeGreaterThanOrEqual(52);
//         await act(() => promise)
//     });
// })

// describe('Contact', () => {
//     it('Test whether a contact request message has more than minimum 1 characters', async () => {
//         const promise = Promise.resolve()


//         const navigate = jest.fn();
//         useNavigate.mockImplementation(() => navigate);

//         render(<ContactFormComponent />);

//         const lastName = screen.getByLabelText('Text Message');
//         fireEvent.change(lastName, {target: {value: 'Hej med dig'}});

//         // Valid partion test
//         expect(lastName.value.length).toBeLessThanOrEqual(255);
//         // Invalid lower partion test
//         expect(lastName.value.length).not.toBeLessThan(-1);
//         // Invalid upper partion test
//         expect(lastName.value.length).not.toBeGreaterThanOrEqual(723);
//         await act(() => promise)
//     });
// })