import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';
// import { isMainThread } from 'worker_threads';

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });
});