const axios = require('axios');
const url = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
    const params = req.params;

    axios.get(url + params.id)
    .then(resp => {
        let character = {
            id:         resp.data.id,
            image:      resp.data.image, 
            name:       resp.data.name, 
            gender:     resp.data.gender,
            status:     resp.data.status, 
            origin:     resp.data?.origin.name,
            species:    resp.data?.species
        }
        return res.status(200).json(character);
    })
    .catch(err => {
        return res.status(404).json({eror: err.message});
    });

}

module.exports = getCharDetail;