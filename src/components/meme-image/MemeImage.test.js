import { shallow, render } from 'enzyme';
import React from 'react';
import MemeImage from './MemeImage';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    const mockProps = {
        meme: {
            "id": "129242436",
            "name": "Change My Mind",
            "url": "https://i.imgflip.com/24y43o.jpg",
            "width": 482,
            "height": 361,
            "box_count": 2
        },
        memeText: "Come to the dark side"
    }
    shallowWrapper = shallow(<MemeImage {...mockProps} />);
    renderWrapper = render(<MemeImage {...mockProps} />);
})

it('expects to render meme image component', () => {
    expect(renderWrapper).toMatchSnapshot();
});
