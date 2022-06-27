import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/Reducer/index.js";
import "./SearchBar.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  //setea el valor del name que estamos buscando en setName
  function handleSearch(e) {
    e.preventDefault();
    setName("");
    setName(e.target.value);
  }

  //al apretar el enter, el cliente va a poder buscar el pais que requiere.
  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  //dice que si el nombre es mayor a 2 el largo, va a despachar el nombre que se filtro en el getname por el id, y lo devuelve
  //en la pagina 1, por eso se usa el setCurrentPage
  //si no se encuentra tira un alert que no se encontro dicho pais.
  function handleSubmit(e) {
    e.preventDefault();
    if (name.length > 2) {
      dispatch(getName(name));
      setCurrentPage(1);
      setName("");
    } else {
      alert("Enter at least three letters");
    }
  }
  return (
    <div className='search-container'>
      <input
        className='search-input'
        type='text'
        placeholder={"Search a Country..."}
        value={name}
        onKeyPress={handleEnter}
        onChange={(e) => handleSearch(e)}
      />
      <button
        className='search-btn'
        type='Submit'
        onClick={(e) => handleSubmit(e)}>
      </button>
    </div>
  );
}

