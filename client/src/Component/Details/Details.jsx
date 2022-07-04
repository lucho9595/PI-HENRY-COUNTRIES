import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail} from "../../redux/Actions";
import {Link} from"react-router-dom";


export default function Details(props) {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch, props.match.params.id])

    const countriesDetail = useSelector((state) => state.details)

    return (
            <div >{
                countriesDetail.length > 0 ?
                    <div >
                        <img src={countriesDetail[0].flag} alt='Imagen no encontrada' width='250px' height='175px' />
                        <h1 >{countriesDetail[0].name}</h1>
                        <div>
                            <h2>Id: {countriesDetail[0].id}</h2>
                            <h2>Capital: {countriesDetail[0].capital}</h2>
                            <h2>Continente: {countriesDetail[0].continent}</h2>
                            <h2>Subregion: {countriesDetail[0].subregion}</h2>
                            <h2>Area: {countriesDetail[0].area} km2</h2>
                            <h2>Poblacion: {countriesDetail[0].population}</h2>
                        </div>
                    </div> :
                    <div className='loading'>
                        <p> Loading... </p>
                    </div>

            }
            <Link to='/home'>VOLVER
            </Link></div>

    );
};