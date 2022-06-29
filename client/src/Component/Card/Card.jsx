import React from "react";
import './Card.module.css'

//va a renderizar lo que yo preciso
function Card({ name, flag, continents, population, activities}) {
    return(
        <div>
            <h3>{name}</h3>
            <img src={flag} alt="Img not Found" />
            <h4>{continents}</h4>
            <h4>{population}</h4>
            <h4>{activities}</h4>
        </div>
    )

}
export default Card;