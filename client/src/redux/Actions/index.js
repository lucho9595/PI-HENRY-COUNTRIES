import axios from 'axios';
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_BY_CONTINENT = " FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITIES = "  FILTER_BY_ACTIVITIES";
export const ORDER_ALPHA = "ORDER_ALPHA";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ACTIVITIES = " POST_ACTIVITIES";
export const RESET = "RESET";



//TRAER TODOS LOS PAISES

export function getAllCountries() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/countries') //aca se hace la conexion con el backend!!
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

// //TRAER PAISES POR ID

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

//RESETEAR Y VOLVER AL INICIO

export function restartDetail() {
    return (dispatch) => {
        dispatch({ type: RESET })
    }
}


//TRAER PAISES POR NOMBRE

export function getNameCountries(name) {
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/countries?name=" + name)
        return dispatch({
          type: SEARCH_COUNTRIES,
          payload: json.data
        });
  }
}

//filtrar los paises por continentes

export function filterCountriesByContinent(payload) {
    return ({
        type: FILTER_BY_CONTINENT,
        payload
    })
}


//filtrar por tipo de actividad turistica en los paises


export function filterCountriesByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}

// //ordenar los nombres por orden alfabetico, y de orden ascendente o descendente

export function orderAlpha(payload) {
    return {
        type: ORDER_ALPHA,
        payload
    }
}

// //ordenar por poblacion por cantidad mayor o menor

export function orderPopulation(payload) {
    return{
        type: ORDER_POPULATION,
        payload
    }
}

// //traer las actividades

export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/activity');
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data
            })
        } catch (error) {
            alert('No hay actividades')
            console.log(error)
        }
    }
}

// //crear nuevas actividades

export function postActivities(payload) {
    return async function () {
       const json =  await axios.post('http://localhost:3001/activity', payload);
        return json
    }
}