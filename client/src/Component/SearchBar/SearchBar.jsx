import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameCountries} from "../../redux/Actions/index";
import style from "../SearchBar/SearchBar.module.css"



const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getNameCountries(search));
        setSearch("");
    } 


    const handleChange = async (e) => {
        await setSearch(e.target.value);
    }

    return (
        <div >
            <input  type="text" placeholder="Insert country..." value={search} onChange={(e) => handleChange(e)}/>
            <input  type="submit" value="Search" onClick={(e) => handleClick(e)}/>

        </div>
    )

}

export default SearchBar;