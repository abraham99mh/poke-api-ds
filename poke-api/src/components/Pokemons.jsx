import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

import Pagination from './Pagination';

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([]);

    const [offset, changeOffset] = useState(0);

    const lastOffset = 1140;

    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset="

    useEffect(() => {
        axios
            .get(url + offset)
            .then((resp) => {
                setPokemons([]);
                for(let i = 0 ; i < resp.data.results.length; i++){
                    axios
                        .get(resp.data.results[i].url)
                        .then((resp2) => {
                            setPokemons(prevArray => [...prevArray, resp2.data]);
                        });
                }
            });
    }, [offset]);

    return (
        <>
            <div className='row'>
                {pokemons.map((pokemon, index) => {
                    return (
                        <Card key={index} pokemon={pokemon} />
                    )
                })}

            </div>
            <Pagination offset={offset} changeOffset={changeOffset} lastOffset={lastOffset} />
        </>
    );
}

export default Pokemons;