import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getAllCountries, postActivities } from "../../redux/Actions";

//El useHistory es un metodo del router que lo que hace es redirijirme a la ruta q yo le diga

function error(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "Debe completar este campo";
    } else if (!input.duration) {
        errors.duration = "Debe completar este campo";
    } else if (!input.difficulty) {
        errors.difficulty = "Debe seleccionar la complejidad";
    } else if (!input.season) {
        errors.season = "Debe seleccionar una estacion";
    } else if (input.countries === []) {
        errors.countries = "Debe seleccionar un pais";
    }
    return errors;
}
export default function Createactivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.allCountries);
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            error({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
        console.log(input)
    };

    useEffect(() => {
        dispatch(getActivities());
        dispatch(getAllCountries());
    }, [dispatch]);


    function handleSelect(e) {
        setInput({
            ...input,
            countryId: [...input.countryId, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (input.name === "" ||
            input.duration === "" ||
            input.difficulty === "" ||
            input.season === "" ||
            input.countryId.length === 0) return alert('Debe llenar los campos');
        dispatch(postActivities(input));
        alert("Actividad Creada");
        setInput({
            name: "",
            duration: "",
            difficulty: "",
            season: "",
            countryId: [],
        });
        history.push("/home");
    }
    function handleDelete(i) {
        setInput({
          ...input,
          countryId: input.countryId.filter((el) => el !== i),
        });
      }

    return (
        <div>
            <h1>Crea tu Actividad</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} />
                    {errors.name && <p className='form-error'>{errors.name}</p>}
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input type="range" name="difficulty" min="1" max="5" value={input.difficulty} onChange={(e) => handleChange(e)} />
                    {errors.difficulty && <p className='form-error'>{errors.difficulty}</p>}
                </div>
                <div>
                    <label>Duration:</label>
                    <input type="text" value={input.duration} name="duration" onChange={(e) => handleChange(e)} />
                    {errors.duration && <p className='form-error'>{errors.duration}</p>}
                </div>
                <div>
                    <select
                        className='select-form'
                        value={input.season}
                        name='season'
                        onChange={(e) => handleChange(e)}>
                        <option hidden value=''>
                            Season
                        </option>
                        <option value='Summer'>Summer</option>
                        <option value='Autumn'>Autumn</option>
                        <option value='Winter'>Winter</option>
                        <option value='Spring'>Spring</option>
                    </select>                {errors.season && <p className='form-error'>{errors.season}</p>}</div>

                <select onChange={(e) => handleSelect(e)}>
                    {countries?.map((country) => (
                        <option value={input.countries}>{country.name}</option>
                    ))}
                </select>

                {input.countryId.map(el =>
                <div>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}> x </button>
                </div>
            )}
                <div>
                    <button>Created Activity</button>
                </div>
            </form>
            <Link to="/home"><button>Go back</button></Link>
        </div>
    )

}