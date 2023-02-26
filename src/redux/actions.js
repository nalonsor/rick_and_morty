import axios from 'axios';

import { 
    ON_SEARCH,
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
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(resp => dispatch({ type: ON_SEARCH, payload: resp.data }))
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
    return { type: ADD_FAVORITE, payload: character };
}

export function removeFavorite(id) {
    return { type: REMOVE_FAVORITE, payload: id};
}

export function fetchFavorites() {
    return { type: GET_FAVORITES, payload: 'All' }; 
}

export function filterCards(gender) {
    //console.log(gender);
    return { type: FILTER, payload: gender }; 
}

export function orderCards(id){
    return { type: ORDER, payload: id };
}