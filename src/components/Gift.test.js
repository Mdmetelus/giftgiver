import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';
// import { isMainThread } from 'worker_threads';

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });


    it('initializes a person and present in `state`', ( )=> {
        expect(gift.state()).toEqual({ preson: '', present: '', });
    });

    decribe('when typing into the person input', () => {
        const person = 'Uncle';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: {value: person } });

        });
        it('updates the person in `state`', ( ) => {
            expect(gift.state().person).toEqual(person);
        });
    });

    descreibe('when typing into the present input', () => {
        const present = 'Golf Clubs';

        beforeEach(() => {
            gift.find('.input-present'). simulate(change,{target: { value: present} });

        })
        it('should update the present in the `state`', () => {
            expect(gift.state().present).toEqual(present);
        })
    });
});