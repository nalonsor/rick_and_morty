import axios from 'axios';

import { 
    ON_SEARCH,
    GET_CHARACTER_DETAIL,
    DELETE_CHARACTER,
    GET_CHARACTERS,
    ADD_FAVORITE, 
    REMOVE_FAVORITE, 
    GET_FAVORITES, 
    FILTER, 
    ORDER 
} from './types';


export const onSearch = (id) => {

    return async (dispatch) => {
        //await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        //await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
        await axios.get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
        .then(resp => dispatch({ type: ON_SEARCH, payload: resp.data }))
        .catch(err => {
            console.log(err.message);
            window.alert('character not found');
        })

    }

}

export const getCharacterDetail = (id) => {

    return async (dispatch) => {
        await axios.get(`http://localhost:3001/rickandmorty/detail/${id}`)
        .then(resp => dispatch({ type: GET_CHARACTER_DETAIL, payload: resp.data }))
        .catch(err => {
            console.log(err.message);
            window.alert('character not found');
        })
    }
}

export const deleteCharacter = (id) => {
    return ({ type: DELETE_CHARACTER, payload: id });
}

export const getCharacters = (page) => {
    return async (dispatch) => {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return dispatch({ type: GET_CHARACTERS, payload: resp.data.results });
    }
}

export function addFavorite(character) {
    //return { type: ADD_FAVORITE, payload: character };
    return async (dispatch) => {
        await axios.post(`http://localhost:3001/rickandmorty/fav`, character)
        .then(resp => dispatch({ type: ADD_FAVORITE, payload: resp.data }))
        .catch(err => {
            //console.log(err.message);
            //window.alert('character not found');
            window.alert(err.message);
        })
    }
}

export function removeFavorite(id) {
    //return { type: REMOVE_FAVORITE, payload: id};
    return async (dispatch) => {
        await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}/delete`)
        .then(resp => dispatch({ type: REMOVE_FAVORITE, payload: resp.data.favs }))
        .catch(err => {
            //console.log(err.message);
            //window.alert('character not found');
            window.alert(err.message);
        })
    }
}

export function fetchFavorites() {
    //return { type: GET_FAVORITES, payload: 'All' }; 
    return async (dispatch) => {
        await axios.get(`http://localhost:3001/rickandmorty/fav`)
        .then(resp => dispatch({ type: GET_FAVORITES, payload: resp.data.favs }))
        .catch(err => {
            //console.log(err);
            //window.alert('character not found');
            window.alert(err.message);
        })
    }
}

export function filterCards(gender) {
    //console.log(gender);
    return { type: FILTER, payload: gender }; 
}

export function orderCards(id){
    return { type: ORDER, payload: id };
}