import {
  GET_ALL_POKE, LOADING, ERROR, GET_POKE,
} from '../types/PokesTypes';

const INITIAL_STATE = {
  pokemons: {},
  loading: false,
  pokemon: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POKE:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        error: '',
      };
    case GET_POKE:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
        error: '',
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
