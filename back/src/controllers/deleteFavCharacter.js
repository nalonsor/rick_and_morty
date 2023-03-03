let favs = require('../utils/favs');

const deleteFavCharacter = (req, res) => {
    const { id } = req.params;

    if (!id ) {
        return res.status(404).json({success: false, message: 'Fav not addeded, incomplete data.'});
    }else{
        //console.log(favs);

        let filteredFav = favs.find(f => f.id === parseInt(id));

        if(!filteredFav){
            return res.status(404).json({ error: "character was not deleted, because the character not found." })
        }else{
            favs = favs.filter(f => f.id!== parseInt(id))
            return res.status(200).json({favs});
        }

    }
}

module.exports = deleteFavCharacter;

