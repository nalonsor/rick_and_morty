const express       = require('express');
const router        = express.Router();

const getCharById           = require('../controllers/getCharById');
const getCharDetail         = require('../controllers/getCharDetail');
const addFavCharacter       = require('../controllers/addFavCharacter');
const getFavs               = require('../controllers/getFavs');
const deleteFavCharacter    = require('../controllers/deleteFavCharacter');


router.get( '/rickandmorty/onsearch/:id', (req, res) => getCharById(req, res) );
router.get( '/rickandmorty/detail/:id', (req, res) => getCharDetail(req, res) );
router.delete( '/rickandmorty/fav/:id/delete', (req, res) => deleteFavCharacter(req, res) );
router.post( '/rickandmorty/fav', (req, res) => addFavCharacter(req, res) );
router.get( '/rickandmorty/fav', (req, res) => getFavs(req, res) );

module.exports = router;