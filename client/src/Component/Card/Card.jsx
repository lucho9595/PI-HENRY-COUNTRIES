import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

function CardComponent({id, name, flag, continents, population, activities}) {
    return(
        <Link to={`/country/${id}`} className='linkToDetails'>
            <div className="card">
                <div key={id}>
                    <img src={flag} alt='img not found' className='flagImg' />
                    <div className="infoCard">
                        <h1 className="title">{name}</h1>
                        <p className="continents">Continente: {continents}</p>
                        <p className="population">Poblacion: {population}</p>
                        <ul>
                        {activities?.map(activity => {
                            return(
                                <li key={activity.id}>Actividades: {activity.name}</li>
                                )
                            })} 
                        </ul>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default CardComponent;