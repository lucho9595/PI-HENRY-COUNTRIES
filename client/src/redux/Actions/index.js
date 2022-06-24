const axios = require('axios');
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ID_COUNTRIES = "GET_ID_COUNTRIES";
export const GET_NAME = " GET_NAME";

//TRAER TODOS LOS PAISES

export function getAllCountries() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

//TRAER PAISES POR ID

export function getIdCountries(id) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: GET_ID_COUNTRIES,
            payload: json.data
        })
    }
}

//TRAER PAISES POR NOMBRE

export function getName(name) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch({
            type: GET_NAME,
            payload: json.data
        })
    }
}



