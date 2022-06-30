import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, filterCountriesByActivity, filterCountriesByContinent, orderAlpha, orderPopulationMayor, orderPopulationMinior } from "../../redux/Actions/index.js";

const Order = ({ setCurrentPage }) => {
    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.activities);
    const [order, setOrder] = useState(" ");

    function handleActivity(e) {
        e.preventDefault();
        dispatch(filterCountriesByActivity(e.target.value));
        setCurrentPage(1);
    }

    function handleContinent(e) {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
        setCurrentPage(1);
    }


    function handleOrderAlpha(e) {
        e.preventDefault();
        dispatch(orderAlpha(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
        //para lo unico que lo vamos a usar es que cuando yo setea la pagina de arriba
        //modifique el estado local y se renderiza.
    }
    
    function orderPopMajor(e) {
        e.preventDefault();
        dispatch(orderPopulationMayor());
    }
    function orderPopMinor(e) {
        e.preventDefault();
        dispatch(orderPopulationMinior());
    }

    useEffect(() => {
        dispatch(getActivities())
    })

    return (
        <div>
            <select onChange={e => handleOrderAlpha(e)}>
                <option value="Ascendente"> Ascendente </option>
                <option value="Descendente"> Descendente </option>

            </select>
            <button onClick={(e) => orderPopMajor(e)}>Pop + to -</button>
            <button onClick={(e) => orderPopMinor(e)}>Pop - to +</button>
            <select onChange={e => handleContinent(e)}>
                <option value='All'>All Continents</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>
            <select onChange={(e) => handleActivity(e)}>
                <option value='All'>All Activities</option>
                {allActivities.map((el) => {
                    return (
                        <option value={el.name} key={el.id}>
                            {el.name}
                        </option>
                    );
                })}
            </select>
        </div>

    )
}

export default Order;

