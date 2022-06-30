import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllCountries} from "../../redux/Actions/index";
import Card from "../Card/Card";
import './Home.css'
import NavBar from "../NavBar/NavBar";
import Paginado from "../Paginado/Paginado";

function HomeComponent() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries) //es lo mismo que hacer el mapStateToProps

    //PAGINADO
    //aca hicimos que guarde en un estado local la pagina actual, comienza en 1 por que siempre voy a arrancar de la primer pagina
    const [currentPage, setCurrentPage] = useState(1) //pagina actual que arranca en 1
    //en esta constante guardamos cuantos paises queremos nosotros por pagina en nuestro estado local.
    const [countriesPerPage, setCountriesPerPage] = useState(10) //paises por pagina que siempre van a ser 9
    //hacemos otra constante que se llama el indice del ultimo pais, y esto es la igual
    //a la pagina actual en la que estoy por la cantidad de personajes por pagina
    const indexOfLastCountries = currentPage * countriesPerPage
    //hacemos otra constante que se llama el indice del primer pais, y esto es la igual
    //al indice del ultimo personaje(la constante que creamos arriba) 
    //menos la cantidad de personajes por pagina
    const indexOfFirstCountries = indexOfLastCountries - countriesPerPage
    //luego realizamos otra constante que nos va a traer los personajes que estan en la pagina actual
    //el slice divide un array, y toma una porcion dependediendo de lo que nosotros pasemos por parametro
    const currentCountries = countries.slice(indexOfFirstCountries, indexOfLastCountries)
    //cremos una constante que se llame paginado que le pasamos un numero de la pagina
    // y vamos a setear la pagina en ese numero de pagina
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    useEffect(() => {
        dispatch(getAllCountries()) //es lo mismo que hacer el mapDispatchToProps
    },[])

    //El value en option lo que hace es que me permite acceder a incrementar (en este caso) o descrementar despues!
    return (
        <div>
            <Link to='/Createactivity' >Crear Actividad</Link>
            <h1>Countries</h1>
            <NavBar setCurrentPage={setCurrentPage}/>
                <Paginado
                    countriesPerPage={countriesPerPage}
                    countries={countries.length}
                    paginado={paginado} />
                {currentCountries?.map(country => {
                    return (
                        <Link to={"/home/" + country.id}>
                            <Card key={country.id} name={country.name} flag={country.flag} continents={country.continents} population={country.population} activities={country.activities} />
                        </Link>
                    )
                })}
            </div>
      
    )
}

export default HomeComponent;