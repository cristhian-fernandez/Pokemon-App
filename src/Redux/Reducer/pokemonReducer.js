import {
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL,
    ADD_POKEMON_FAVORITE,
    REMOVE_POKEMON_FAVORITE,
    CLEAR_POKEMON_DETAIL,
    CREATE_POKEMON
} from '../Constants/constants';

const initialState = {
    pokemons : [],
    pokemonDetail : {},
    pokemosFavorites :[]
};

export default function pokemonReducer(state=initialState,action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons : [...state.pokemons, action.payload]
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail : action.payload
            }
        case ADD_POKEMON_FAVORITE:
            return {
                ...state,
                pokemosFavorites : [...state.pokemosFavorites, action.payload]
            }
        case REMOVE_POKEMON_FAVORITE:
            return {
                ...state,
                pokemosFavorites : state.pokemosFavorites.filter(pokemon => pokemon.id !== action.payload)
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemons : [...state.pokemons, action.payload]
            }
        case CLEAR_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail : {}
            }
        default: return state;
    }
}
