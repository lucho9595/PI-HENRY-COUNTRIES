import React from "react";
import Order from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";


const NavBar = () =>{
    return (
        <div>
            <SearchBar/>
            <Order/>
        </div>
    )
}

export default NavBar;