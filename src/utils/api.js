const memeApiEndpoint = "https://api.imgflip.com/get_memes";


const getAllMemes = async (axios) => {
    return axios.get(memeApiEndpoint).then((response)=>{
        const data = response.data;
        return {
            memes: data.memes
        }
    }).catch(function(error){
        return "Something went wrong: "+error;
    });
}

module.exports = { getAllMemes }