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

const initialState = {
  char: {},
  characters: [],
  myfavorites: [],
  allCharacters: [],
  searchedCharacters: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload} = action;
  
  switch(type){
    case ON_SEARCH:

      let duplicated = state.searchedCharacters.filter(character => character.id === payload.id);
      if (duplicated.length > 0) {
        window.alert('Ya existe un personaje con ese ID');
        return {...state };
      }
      
      return {
        ...state,
        char: payload,
        searchedCharacters: [payload, ...state.searchedCharacters]
      }
    case GET_CHARACTER_DETAIL:
      return {
      ...state,
        char: payload,
      }
    case DELETE_CHARACTER:
      console.log(payload);
      return {
      ...state,
        searchedCharacters: state.searchedCharacters.filter(char => char.id!== payload)
      }
    case GET_CHARACTERS:
      return {
      ...state,
        characters: payload,
      }
	  case ADD_FAVORITE: 
      return {
        ...state,
        myfavorites: [...state.myfavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      }
    case REMOVE_FAVORITE:
      return {
       ...state,
        myfavorites: payload,
        allCharacters: payload
      }
    case FILTER:
      if(payload === 'allGenders'){
        return{
         ...state,
          myfavorites: [...state.allCharacters]
        }
      }
      return {
      ...state,
        myfavorites: state.allCharacters.filter(char => char.gender === payload)
      }
    case ORDER:
      if(payload === 'Ascendente'){
        const asc = [...state.myfavorites].sort((a, b) => a.id - b.id);
        return{
          ...state,
          myfavorites: asc
        }
      }else{
        const desc = [...state.myfavorites].sort((a, b) => b.id - a.id);
        return{
          ...state,
          myfavorites: desc
        }
      }
    case GET_FAVORITES:
      return {
        ...state,
        myfavorites: payload,
        allCharacters: payload,
      }
	  default:
	    return {...state}
  }

}

export default reducer;