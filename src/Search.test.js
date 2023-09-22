import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Search from './Search';



describe('Search', () => {

    /*Using a utility from Vitest (or Jest) to mock the onChange function 
    which is passed to the component. */
    it('calls the onChange callback handler', () => {
        // Jest
        const onChange = jest.fn();
        // Vitest
        //const onChange = vi.fn();

        render(
            <Search value="" onChange={onChange}>
                Search:
            </Search>
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'JavaScript' },
        });

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});