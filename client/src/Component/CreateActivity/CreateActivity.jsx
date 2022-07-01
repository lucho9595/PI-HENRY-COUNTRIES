import React, {useState} from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Createactivity (){

return(
    <div>
        <h1>Yo soy el formulario de creacion de actividades.</h1>
        <form>

        </form>
        <button><Link to="/home">Go back</Link></button>
    </div>
)

}