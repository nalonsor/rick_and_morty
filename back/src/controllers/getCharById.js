const axios = require('axios');
let url =  "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;

    //axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    try{
        axios.get(url + id)
        .then(resp => {
            let character = {
                id:         resp.data.id,
                image:      resp.data.image, 
                name:       resp.data.name, 
                gender:     resp.data.gender,
                species:    resp.data.species
            }
            return res.status(200).json(character);
        })
    }
    catch(err){
        return res.status(404).json({error: err.message});
    };

}

module.exports = getCharById;