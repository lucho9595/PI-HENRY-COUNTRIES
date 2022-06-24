import {
    GET_COUNTRIES,
GET_ID_COUNTRIES,
GET_NAME
} from "../Actions/index.js";

const initialState = {
    countries: [],
    allCountries: [],
    id: [],
    activities: [],
  };

  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        // Acá va tu código:
        case  GET_COUNTRIES:
            return {
                ...state,
               allCountries:action.payload
            }
        case GET_ID_COUNTRIES:
            return{
                ...state,
                id: action.payload
            }
        case GET_NAME:
            return{
                ...state,
                countries:action.payload
            }
        default: return state
    };
};

export default rootReducer;
