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
        console.log(name)
        

    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNameCountries(name));
        setName("");
    }

    return (
        <div >
            <input type='text' placeholder='Buscar...' value={name} onChange={(el) => handleInputChange(el)} />
            <button className="search" type="submit" value={name} onClick={(el) => handleSubmit(el)}>Buscar</button>
        </div>
    )

}