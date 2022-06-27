import React, { useEffect} from "react";

import { useDispatch, useSelector} from "react-redux";
import { getAllCountries } from "../../redux/Actions/index";
import CardsComponent from "../Cards/Cards";
import './Home.css'

function HomeComponent() {
    const dispatch = useDispatch();
    const allCountry = useSelector(state => state.allCountries)
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPages] = useState(10);

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    // const indexOfLastItem = currentPage * itemsPerPages;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    // const currentItems = allCountries.slice(indexOfFirstItem, indexOfLastItem)


    return(
        <div className="home">
            <div className="cards">
                <CardsComponent allCountries={allCountry}/>
                </div>
        </div>
        
    )
}

export default HomeComponent;