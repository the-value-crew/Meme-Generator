import { shallow, render } from 'enzyme';
import React from 'react';
import MemeSelectionImage from './MemeSelectionImage';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    const mockProps = {
        meme: {
            "id": "181913649",
            "name": "Drake Hotline Bling",
            "url": "https://i.imgflip.com/30b1gx.jpg",
            "width": 1200,
            "height": 1200,
            "box_count": 2
        }
    }
    shallowWrapper = shallow(<MemeSelectionImage {...mockProps} />);
    renderWrapper = render(<MemeSelectionImage {...mockProps} />);
})

it('expects to render meme image', () => {
    expect(renderWrapper).toMatchSnapshot();
});
