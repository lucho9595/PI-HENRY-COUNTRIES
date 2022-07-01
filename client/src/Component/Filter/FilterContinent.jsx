/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch} from "react-redux";
import { filterCountriesByContinent, orderPopulationMayor, orderPopulationMinior } from "../../redux/Actions/index.js";

const continentsOrder = ({ setCurrentPage }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks

    function handleContinent(e) {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
        setCurrentPage(1);
    }

    function orderPopMajor(e) {
        e.preventDefault();
        dispatch(orderPopulationMayor());
    }

    function orderPopMinor(e) {
        e.preventDefault();
        dispatch(orderPopulationMinior());
    }
    return (
        <div>
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
        </div>

    )
}

export default continentsOrder;