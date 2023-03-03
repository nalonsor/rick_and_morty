let favs = require('../utils/favs');

const getFavs = (req, res) => {
    
    favs.length
    ? res.status(200).json({favs})
    : res.status(404).json({erro: "You don't have favorites, yet."}) 
}

module.exports = getFavs;