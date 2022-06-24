import React from "react";
import styles from "./landing.module.css";
import {Link} from "react-router-dom";
// import { Link } from "react-router-dom";

function landindPage() {
    return (
        <div className={styles.s}>
                <Link to="/countries"  >
                    <input type="button" value="Get Home"/>
                </Link>
        </div>
    )

};

export default landindPage;