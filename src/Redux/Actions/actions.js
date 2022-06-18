import { 
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL,
    ADD_POKEMON_FAVORITE,
    REMOVE_POKEMON_FAVORITE,
    CLEAR_POKEMON_DETAIL,
    CREATE_POKEMON
} from "../Constants/constants";

let url = '';
export const getAllPokemons = () => {
    return function (dispatch) {
        fetch(url)
            .then(result => result.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_POKEMONS,
                    payload : data
                });
            })
            .catch( e => console.log(e));
    }
};

export const getPokemonDetail = (id) => {
    return function (dispatch) {
        fetch(url)
            .then(result => result.json())
            .then(data => {
                dispatch({
                    type: GET_POKEMON_DETAIL,
                    payload : data
                });
            })
            .catch( e => console.log(e));
    }
};

export const addPokemonFavorite = (pokemon) => {
    return {
        type: ADD_POKEMON_FAVORITE,
        payload : pokemon
    }
};

export const removePokemonFavorite = (id) => {
    return {
        type: REMOVE_POKEMON_FAVORITE,
        payload : id
    }
};

export const createPokemon = (pokemon) => {
    return {
        type: CREATE_POKEMON,
        payload : pokemon
    }
};

export const clearPokemonDetail = () => {
    return {
        type: CLEAR_POKEMON_DETAIL
    }
}