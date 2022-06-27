const axios = require('axios');
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_NAME_COUNTRIES = "GET_NAME_COUNTRIES";
export const FILTER_BY_CONTINENT = " FILTER_BY_CONTINENT";
export const  FILTER_BY_ACTIVITIES = "  FILTER_BY_ACTIVITIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = " ORDER_BY_POPULATION ";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ACTIVITIES = " POST_ACTIVITIES";



//TRAER TODOS LOS PAISES

export function getAllCountries() {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries')
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            })
        }catch(error){
            console.log(error);
        }
    }
}

//TRAER PAISES POR ID

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
//TRAER PAISES POR NOMBRE

export function getNameCountries(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: GET_NAME_COUNTRIES,
                payload: json.data
            });
        } catch (error) {
            alert('El pais no fue encontrado')
            console.log(error)
        }
    }
}

//filtrar los paises por continentes

export function filterCountriesByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

//filtrar por tipo de actividad turistica en los paises


export function filterCountriesByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}

//ordenar los nombres

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

//ordenar por poblacion

export function orderByPopulation(payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

//traer las actividades

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

//crear nuevas actividades

export function postActivities(payload) {
    return async function (dispatch) {
        await axios.post('http://localhost:3001/activity', payload);
        return dispatch({
            type: POST_ACTIVITIES,
        })
    }
}
