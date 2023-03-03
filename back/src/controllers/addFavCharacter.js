let favs = require('../utils/favs');

const addFavChar = (req, res) => {
    const { id, image, name, gender, species } = req.body;

    if (!id ||!image ||!name ||!gender ||!species) {
        return res.status(404).json({success: false, message: 'Incomplete data.'});
    }else{

        let character = {
            id,
            image,
            name,  
            gender, 
            species, 
        }
        favs.push(character);
        return res.status(200).json({success: true, char: character});

    }
}

module.exports = addFavChar;
