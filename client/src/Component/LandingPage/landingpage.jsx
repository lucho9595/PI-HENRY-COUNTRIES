import React from "react";
import styles from "./Landing.module.css";
import {Link} from "react-router-dom";
// import { getAllCountries } from "../../redux/Actions";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

function LandingPage() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllCountries())
    // }, [dispatch])

    return (
        <div className ="landingPage">
        <h1 className = 'landingTitle'> Bienvenidos </h1>
        <h2 className = 'landingSubTitle'> a mi proyecto Henry</h2>
        <Link to ='/home'>
            <button className='landingButton'> Iniciar experiencia </button>
        </Link>
    </div>    )

};

export default  LandingPage;