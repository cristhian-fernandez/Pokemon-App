import { combineReducers } from "redux";

// Importar todos los Reducers
import pokemonReducer from "./pokemonReducer";
// import modalReducer from "./modalReducers";

// Combinar Reducers
const rootReducers = combineReducers ({
    pokemonReducer
    // modalReducer
});

export default rootReducers;

