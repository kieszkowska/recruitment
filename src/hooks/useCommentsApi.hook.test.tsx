import React from 'react';
import * as fetchApiData from "./fetchApiData.hook";
import {useCommentsApiHook} from "./useCommentsApi.hook";

describe('UseCommentsApi hook', () => {
    it('Returns correct data', async () => {
        const value = {
            data: [{
                "name": "id labore ex et quam laborum",
            }],
            count: 0,
        }
        
        const spy = jest.spyOn(fetchApiData, 'useFetchApiData').mockImplementation(() => value);
        
        const data = useCommentsApiHook()
        
        expect(data).toEqual(value);

        spy.mockRestore()
    });
})
