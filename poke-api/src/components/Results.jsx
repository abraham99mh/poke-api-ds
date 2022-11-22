import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const Results = (props) => {

    const [pokemon, setPokemon] = useState();
    
    //const [found, setFound] = useState();

    const url = "https://pokeapi.co/api/v2/pokemon/"

    useEffect(() => {
        axios
            .get(url + props.input)
            .then((resp) => {
                setPokemon(resp.data);
            })
            .catch((error) => {
                console.log(error.response.data);
                setPokemon();
            });
    }, [props.input]);

    return ( <>
        {pokemon ? 
            <>
                <h2>{pokemon.name}</h2>
                <div className='row'>
                    <Card pokemon={pokemon} />
                </div>
            </>
            :
            <h2>No hay resultados de la búsqueda :c</h2>
            }
    </> );
}
 
export default Results;