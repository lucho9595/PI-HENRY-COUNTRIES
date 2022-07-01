import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../redux/Actions/index";
import style from "../SearchBar/SearchBar.module.css"



export default function SearchBar() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        // setName("");
        console.log(name)

    }

    function handleSubmit(e) {
        e.preventDefault();
        // if (name.length === 0) return alert('Debe colocar un Pais');
        dispatch(getNameCountries(name));
        setName("")
    }

    return (
        <div >
            <input type='text' placeholder='Buscar...' onChange={(el) => handleInputChange(el)} />
            <button className="search" type="submit" onClick={(el) => handleSubmit(el)}>Buscar</button>
        </div>
    )

}