import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import UsersList from './UsersList';
import * as useUsersApi from "../../hooks/useUsersApi.hook";

describe('UsersList component', () => {
    it('Renders users component', () => {
        const spy = jest.spyOn(useUsersApi, 'useUsersApiHook').mockImplementation(() => ({
            data: [{
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }],
            count: 0,
        }));
        render(<UsersList/>);
        const header = screen.getByText(/users/i);
        expect(header).toBeInTheDocument();

        spy.mockRestore()
    });

    it('Handle page change', () => {
        const spy = jest.spyOn(useUsersApi, 'useUsersApiHook').mockImplementation(() => ({
            data: [{
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }],
            count: 50,
        }));
        render(<UsersList/>);
        const pagination = screen.getAllByRole(/button/i)[3];
        fireEvent.click(pagination)
        expect(pagination).toHaveClass('Mui-selected');

        spy.mockRestore()
    });

    it('Render loader when no data', () => {
        const spy = jest.spyOn(useUsersApi, 'useUsersApiHook').mockImplementation(() => ({
            data: undefined,
            count: 0,
        }));

        render(<UsersList/>);
        const loader = screen.getByRole(/progress/i);
        expect(loader).toBeInTheDocument();

        spy.mockRestore()
    });

    it('Render message when empty data', () => {
        const spy = jest.spyOn(useUsersApi, 'useUsersApiHook').mockImplementation(() => ({
            data: [],
            count: 0,
        }));

        render(<UsersList/>);
        const message = screen.getByText(/No data/i);
        expect(message).toBeInTheDocument();

        spy.mockRestore()
    });


    it('Render error message on error', async () => {
        const spy = jest.spyOn(useUsersApi, 'useUsersApiHook').mockImplementation(() => ({
            count: 50,
            error: 404,
        }));

        render(<UsersList/>);
        await screen.findByText(/error 404/i)
        const error = screen.getByText(/error 404/i);
        expect(error).toBeInTheDocument();

        spy.mockRestore()
    });
})
