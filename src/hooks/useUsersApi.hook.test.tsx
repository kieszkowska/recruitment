import React from 'react';
import * as fetchApiData from "./fetchApiData.hook";
import {useUsersApiHook} from "./useUsersApi.hook";

describe('UseUsersApi hook', () => {
    it('Returns correct data', async () => {
        const value = {
            data: [{
                "name": "id labore ex et quam laborum",
            }],
            count: 0,
        }
        
        const spy = jest.spyOn(fetchApiData, 'useFetchApiData').mockImplementation(() => value);
        
        const data = useUsersApiHook()
        
        expect(data).toEqual(value);

        spy.mockRestore()
    });
})
