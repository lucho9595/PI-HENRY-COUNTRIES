import React from "react";
import Card from "../Card/Card";
import './cards.css'

function CardsComponent({allCountries}) {
    return(
        <div className="cards">
            {allCountries && allCountries.map((country) => {
                return(
                    <Card
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continents={country.continents}
                    population={country.population}
                    activities={country.activities}
                    />
                )
            })}
        </div>
    )
}
export default CardsComponent;