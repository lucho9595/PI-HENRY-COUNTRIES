const axios = require ('axios');
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ID_COUNTRIES = "GET_ID_COUNTRIES";


export function getAllCountries(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

export function getIdCountries (id){
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: GET_ID_COUNTRIES,
            payload: json.data
        })
    }
}