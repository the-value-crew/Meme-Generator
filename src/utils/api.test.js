const axios = require("axios");
const api = require('./api');

const memeApiEndpoint = "https://api.imgflip.com/get_memes";
const mockMemeData = {
    "memes": [
        {
            "id": "181913649",
            "name": "Drake Hotline Bling",
            "url": "https://i.imgflip.com/30b1gx.jpg",
            "width": 1200,
            "height": 1200,
            "box_count": 2
        },
        {
            "id": "112126428",
            "name": "Distracted Boyfriend",
            "url": "https://i.imgflip.com/1ur9b0.jpg",
            "width": 1200,
            "height": 800,
            "box_count": 3
        },
        {
            "id": "87743020",
            "name": "Two Buttons",
            "url": "https://i.imgflip.com/1g8my4.jpg",
            "width": 600,
            "height": 908,
            "box_count": 2
        },
    ]
}
const mockSucessResponse = {
    "success": true,
    "data": {
        "memes": [
            {
                "id": "181913649",
                "name": "Drake Hotline Bling",
                "url": "https://i.imgflip.com/30b1gx.jpg",
                "width": 1200,
                "height": 1200,
                "box_count": 2
            },
            {
                "id": "112126428",
                "name": "Distracted Boyfriend",
                "url": "https://i.imgflip.com/1ur9b0.jpg",
                "width": 1200,
                "height": 800,
                "box_count": 3
            },
            {
                "id": "87743020",
                "name": "Two Buttons",
                "url": "https://i.imgflip.com/1g8my4.jpg",
                "width": 600,
                "height": 908,
                "box_count": 2
            }]
    }
}

jest.mock('axios');

it("returns appropriate data from method", () => {

    axios.get.mockResolvedValue(mockSucessResponse);

    api.getAllMemes(axios).then(data => expect(data).toEqual(mockMemeData));
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(memeApiEndpoint);
});

it("returns appropriate error message from method",()=>{
    axios.get.mockRejectedValue(new Error('Connection Error'));
    
    api.getAllMemes(axios).then(data => expect(data).toEqual("Something went wrong: Error: Connection Error"));
})