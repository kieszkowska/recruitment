import React from 'react';
import {useFetchApiData} from "./fetchApiData.hook";
import { renderHook } from '@testing-library/react-hooks'

beforeAll(() => jest.spyOn(window, 'fetch'))

describe('FetchApiData hook', () => {
    it("Returns fetched data", async () => {
        (window.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            headers: {
                get: () => ({'x-total-count': 0})
            },
            json: async () => ([1, 2]),
        })

        const {result, waitForNextUpdate} = renderHook(() => useFetchApiData('test.com', 1))
        
        await waitForNextUpdate()

        expect(result.current.data).toEqual([1, 2])
    })
    
    it("Returns error code", async () => {
        (window.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            headers: {
                get: () => ({'x-total-count': 0})
            },
            status: 400
        })

        const {result, waitForNextUpdate} = renderHook(() => useFetchApiData('test.com', 1))

        await waitForNextUpdate()

        expect(result.current.error).toEqual(400)
    })
})
