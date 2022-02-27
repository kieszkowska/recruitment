import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import CommentsList from './CommentsList';
import * as useCommentsApi from "../../hooks/useCommentsApi.hook";

describe('CommentsList component', () => {
    it('Renders comments component', () => {
        const spy = jest.spyOn(useCommentsApi, 'useCommentsApiHook').mockImplementation(() => ({
            data: [{
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }],
            count: 0,
        }));
        render(<CommentsList/>);
        const header = screen.getByText(/Comments/i);
        expect(header).toBeInTheDocument();
        
        spy.mockRestore()
    });

    it('Handle page change', () => {
        const spy = jest.spyOn(useCommentsApi, 'useCommentsApiHook').mockImplementation(() => ({
            data: [{
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }],
            count: 50,
        }));
        render(<CommentsList/>);
        const pagination = screen.getAllByRole(/button/i)[3];
        fireEvent.click(pagination)
        expect(pagination).toHaveClass('Mui-selected');

        spy.mockRestore()
    });

    it('Render loader when no data', () => {
        const spy = jest.spyOn(useCommentsApi, 'useCommentsApiHook').mockImplementation(() => ({
            data: undefined,
            count: 0,
        }));

        render(<CommentsList/>);
        const loader = screen.getByRole(/progress/i);
        expect(loader).toBeInTheDocument();

        spy.mockRestore()
    });

    it('Render message when empty data', () => {
        const spy = jest.spyOn(useCommentsApi, 'useCommentsApiHook').mockImplementation(() => ({
            data: [],
            count: 0,
        }));

        render(<CommentsList/>);
        const message = screen.getByText(/no data/i);
        expect(message).toBeInTheDocument();

        spy.mockRestore()
    });

    it('Render error message on error', async () => {
        const spy = jest.spyOn(useCommentsApi, 'useCommentsApiHook').mockImplementation(() => ({
            count: 50,
            error: 404,
        }));

        render(<CommentsList/>);
        await screen.findByText(/error 404/i)
        const error = screen.getByText(/error 404/i);
        expect(error).toBeInTheDocument();

        spy.mockRestore()
    });
})
