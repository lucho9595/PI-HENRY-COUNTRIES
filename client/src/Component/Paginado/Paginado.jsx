import React from "react";

export default function Paginado({ countriesPerPage, countries, paginado }) {
    const pageNumbers = [];
    //La función Math.ceil() 
    //devuelve el entero mayor o igual más próximo a un número dado. por ende por parametro dividimos la cantidad de paises que tenemos
    //y lo dividimos por la cantidad de paises que quiero por pagina, y de eso va a salir un numero redondo.
    //luego se pushea(se agrega) a la constante con el array vacio que declaramos al principio.
    for (let i = 1; i <= Math.ceil( countries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    //este componente es el que va a renderizar los numeritos en si!!!
    //vamos a poner pageNumber y si tiene algo,  se realiza el mapeo
    //y se devuelve cada uno de los numeros que pedimos en el paginado.

    return (
        <nav>
            <ul>

                {pageNumbers && pageNumbers.map(number => 
                    <button className="number" onClick={() => paginado(number)} key={number}>{number}</button>
                )}
            </ul>
        </nav>
    )
}