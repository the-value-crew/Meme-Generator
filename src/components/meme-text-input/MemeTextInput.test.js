import { shallow, render } from 'enzyme';
import React from 'react';
import MemeTextInput from './MemeTextInput';

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
    shallowWrapper = shallow(<MemeTextInput {...mockProps} />);
    renderWrapper = render(<MemeTextInput {...mockProps} />);
})


it('expects to render counter button', () => {
    expect(renderWrapper).toMatchSnapshot();
});

