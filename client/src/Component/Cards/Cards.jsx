import React from "react";
import Style from "./cards.css";


function Countries(props){
    return (
        <div>
        <img src={props.flag} />
        <p>Name: {props.fullName}</p>
        <p>Continent: {props.continent}</p>
        <p>Id: {props.id}</p>
        <p>Capital: {props.capital}</p>
        <p>Subregion: {props.subregion}</p>
        <p>Area: {props.area}</p>
        <p>Poblation: {props.poblation}</p>
        <p>Activity: {props.activity}</p>
    </div>
    )
}

export default Countries;