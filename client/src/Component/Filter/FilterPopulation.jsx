import React from "react";
import { useDispatch } from "react-redux";
import { orderPopulation} from "../../redux/Actions/index.js";

export default function FilterPopulation({setOrder}) {
  const dispatch = useDispatch();

  function handlePopulation(e) {
    e.preventDefault();
    dispatch(orderPopulation(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    ;
  }

  return (
    <div >
      <select  onChange={(e) => handlePopulation(e)}>
        <option disable>By Population</option>
        <option value='High'>Lower</option>
        <option value='Low'>Higher</option>
      </select>
    </div>
  );
}