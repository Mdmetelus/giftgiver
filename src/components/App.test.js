import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    
    const app = shallow(<App />);
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('initializes the`state` with and empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
    

    describe('when clicking the `add-gift` button', () => {

        const id = 1;
        beforeEach(() => {
            app.find('.btn-add').simulate('click');

        });

        afterEach(() => {
            app.setState({ gifts: [] });

        });

        it('adds a new gift to `state` ', () => {
            // app.find('.btn-add').simulate('click');
        
            expect(app.state().gifts).toEqual([{ id: 1}]);
        });
        
        it('adds a new gift to the rendered list', () => {
            // app.find('.btn-add').simulate('click');

            expect(app.find('.gift-list').children().length).toEqual(1);
        
        });

        if('creates a gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        decribe('when the user wants to rempve the added gift', () => {
            beforeEach(() => {
                const id = 1 ;
                app.instance().removeGift(id);
            });

            it('removes the gift from the state', () => {
                expect(app.state().gifts).toEqual([]);
            })
        });
    });

});