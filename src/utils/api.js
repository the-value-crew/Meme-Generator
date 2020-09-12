const memeApiEndpoint = "https://api.imgflip.com/get_memes";
const axios = require('axios');


const getAllMemes = async (_) => {
    const response = await axios.get(memeApiEndpoint).then((response) => {
        const data = response.data;
        return {
            memes: data.data.memes.splice(0, 10)
        }
    }).catch(function (error) {
        return "Something went wrong: " + error;
    });
    return response;
}



module.exports = { getAllMemes }