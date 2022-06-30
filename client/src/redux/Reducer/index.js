import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_NAME_COUNTRIES,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITIES,
    ORDER_ALPHA,
    GET_ACTIVITIES,
    ORDER_POP_MAY,
    ORDER_POP_MIN,
    // POST_ACTIVITIES
} from "../Actions/index.js";

const initialState = {
    countries: [],
    allCountries: [],
    details: [],
    activities: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Acá va tu código:
        //si hay una caso de GET_COUNTRIES, encuentra todos los paises y los almacena en allcountries y countries;
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        //         //si hay una caso de GET_DETAIL, devuelve un pais con ese id;
        case GET_DETAIL:
            return {
                ...state,
                details: action.payload
            }
        //         //si hay una caso de GET_NAME_COUNTRIES, devuelve un pais que se este buscando;
        case GET_NAME_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        //         //si hay una caso de FILTER_BY_CONTINENT, almacenamos en una variable a todos los paises;
        //         //luego en el caso que devuelva a todos, devuelve todos los paises o sea allcountries, si no
        //         //se filtra allcountries y va a devolver el continente de country que coincida con el action payload
        //         //luego devolvemos el countries filtrado;
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const continentFilter =
                action.payload === "All"
                    ? allCountries
                    : allCountries.filter(
                        (country) => country.continents === action.payload
                    );
            return {
                ...state,
                countries: continentFilter,
            };
        //         //si hay una caso de FILTER_BY_ACTIVITIES, almacenamos en una variable a todas las actividades;
        //         //luego en el caso que devuelva a todos, devuelve todas las actividades o sea activities, si no
        //         //se filtra activities y va a devolver la actividad de act que coincida con el action payload
        //         //luego devolvemos la actividad filtrada;
        case FILTER_BY_ACTIVITIES:
            const activities = state.allCountries;
            const activitiesFilter =
                action.payload === "All"
                    ? activities
                    : activities.filter(
                        (act) => act.season && act.season.map((e) => e.name).includes(action.payload));
            return {
                ...state,
                countries: activitiesFilter,
            }
        case ORDER_ALPHA:
        let orderAlpha = action.payload === "Ascendente"?
        state.countries.sort(function (a,b){
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;

        }):    
        state.countries.sort(function (a,b){
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;

        })     

        return{
            ...state,
            counries: orderAlpha
        };
        case ORDER_POP_MAY:
            return {
                ...state,
                countries: action.payload
            }
        case ORDER_POP_MIN:
            return {
                ...state,
                countries: action.payload
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        //         case POST_ACTIVITIES:
        //             return {
        //                 ...state,
        //                 activities: action.payload
        default: return state;
    }

};


export default rootReducer;
