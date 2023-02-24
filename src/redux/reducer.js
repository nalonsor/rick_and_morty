import { 
  GET_CHARACTERS, 
  ADD_FAVORITE, 
  REMOVE_FAVORITE, 
  GET_FAVORITES,
  FILTER,
  ORDER
} from './types';

const initialState = {
  characters: [],
  myfavorites: [],
  allCharacters: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload} = action;
  
  switch(type){
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
        myfavorites: state.myfavorites.filter(favorite => favorite.id !== payload),
        allCharacters: state.allCharacters.filter(favorite => favorite.id !== payload)
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
	  default:
	    return {...state}
  }

}

export default reducer;