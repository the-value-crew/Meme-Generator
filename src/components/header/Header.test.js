import {shallow,render} from 'enzyme';
import React from 'react';
import Header from './Header';

it('expects to render header component',()=>{
    expect(render(<Header />)).toMatchSnapshot();
});
