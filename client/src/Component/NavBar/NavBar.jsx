import React from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/Actions";
import Order from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";


const NavBar = ({setCurrentPage}) =>{
    const dispatch = useDispatch();


    function handleFilters(e) {
        e.preventDefault();
        dispatch(getAllCountries());
        setCurrentPage(1);
      }
    return (
        <div>
            <SearchBar/>
            <Order setCurrentPage={setCurrentPage}/>
            <button onClick={(e) => handleFilters(e)}>
        Show all Countries
      </button>
        </div>
    )
}

export default NavBar;