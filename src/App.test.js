import { shallow, render } from 'enzyme';
import React from 'react';
import App from './App';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    const mockProps = {
        label: "Text",
        id: "memeText",
        labelText: "Text",
        placeholder: "Text",
        onTextInput: jest.fn()
    }
    shallowWrapper = shallow(<App {...mockProps} />);
    renderWrapper = render(<App {...mockProps} />);
})


it('expects to render app', () => {
    expect(renderWrapper).toMatchSnapshot();
});

