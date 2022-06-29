import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getActivities, filterCountriesByActivity,  filterCountriesByContinent, orderNameAZ, orderNameZA, orderPopulationMayor, orderPopulationMinior} from "../../redux/Actions/index.js";

const Order = () => {
    const dispatch = useDispatch();
    const activity = useSelector(state => state.activities);

    function filterActivity(e){
        e.preventDefault();
        dispatch(filterCountriesByActivity())
    }

    function filterContinent(e){
        e.preventDefault();
        dispatch(filterCountriesByContinent())
    }

    function orderByAZ(e) {
        e.preventDefault();
        dispatch(orderNameAZ());
    }
    function orderByZA(e) {
        e.preventDefault();
        dispatch(orderNameZA());
    }
    function orderPopMajor(e) {
        e.preventDefault();
        dispatch(orderPopulationMayor());
    }
    function orderPopMinor(e) {
        e.preventDefault();
        dispatch(orderPopulationMinior());
    }

 useEffect(()=>{
    dispatch(getActivities())
 })

 return (
    <div>
        <button onClick={(e) => orderByAZ(e)}>A-Z</button>
        <button  onClick={(e) => orderByZA(e)}>Z-A</button>
        <button onClick={(e) => orderPopMajor(e)}>Pop + to -</button>
        <button  onClick={(e) => orderPopMinor(e)}>Pop - to +</button>
        <select  name="continent" onChange={filterContinent}>
            <option disabled>Continent</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        <select  name="activity" onChange={filterActivity}>
            {
                activity?.map((e) => 
                    <option value={e.id} key={e.id}>{e.name}</option>
                )
            }

        </select>
    </div>
)

}

export default Order;

    
