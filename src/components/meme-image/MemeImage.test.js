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
        memeText: "Come to the dark side",
        downloadMeme: true
    }
    shallowWrapper = shallow(<MemeImage {...mockProps} />);
    renderWrapper = render(<MemeImage {...mockProps} />);
})

it('expects to render meme image component', () => {
    expect(renderWrapper).toMatchSnapshot();
});

it('expects generate meme true prop to run save meme',()=>{
    const mockProps = {
        meme: {
            "id": "129242436",
            "name": "Change My Mind",
            "url": "https://i.imgflip.com/24y43o.jpg",
            "width": 482,
            "height": 361,
            "box_count": 2
        },
        memeText: "Come to the dark side",
        downloadMeme: true
    }
    let shallowWrapper = shallow(<MemeImage {...mockProps} />);
    const mockSaveImageFunction = jest.fn();
    shallowWrapper.saveImage = mockSaveImageFunction();
    expect(mockSaveImageFunction).toHaveBeenCalledTimes(1);
})