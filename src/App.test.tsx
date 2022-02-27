import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

jest.mock("./components/comments/CommentsList", () => () => {
    return <div>Comments</div>;
});

jest.mock("./components/users/UsersList", () => () => {
    return <div>Users</div>;
});

describe('App component', () => {
    it('Renders comments component', () => {
        render(<App/>);
        const header = screen.getByText(/Comments/i);
        expect(header).toBeInTheDocument();
    });

    it('Renders users component', () => {
        render(<App/>);
        const header = screen.getByText(/Users/i);
        expect(header).toBeInTheDocument();
    });
})
