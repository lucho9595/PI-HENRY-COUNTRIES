/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch} from "react-redux";
import { filterCountriesByContinent } from "../../redux/Actions/index.js";

const continentsOrder = ({ setCurrentPage }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks

    function handleContinent(e) {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
        setCurrentPage(1);
    }
    return (
        <div>
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