import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<app />);

interface('renders correctly', () => {
    expect(app).toMatchSnapshot();
});