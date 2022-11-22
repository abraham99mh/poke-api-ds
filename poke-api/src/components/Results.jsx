import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

import Pagination from './Pagination';

const Results = (props) => {

    const [characters, setCharacters] = useState([]);
    
    const [page, changePage] = useState(1);
    const [pages, setPages] = useState(0);

    const url = "https://rickandmortyapi.com/api/character/?name="

    useEffect(() => {
        axios
            .get(url + props.input)
            .then((resp) => {
                setCharacters(resp.data.results);
                setPages(resp.data.info.pages);
            })
            .catch((error) => {
                console.log(error.response.data);
                setCharacters([]);
                setPages();
            });
    }, [props.input]);

    return ( <>
        {pages ? <h2>Páginas: {pages}</h2> : <h2>No hay resultados de la búsqueda :c</h2>}
        <div className='row'>
            {characters.map((character, index) => {
                return (
                    <Card key={index} character={character} />
                )
            })}
        </div>
        {pages && 
            <Pagination page={page} changePage={changePage} maxPages={pages}/>
        }
    </> );
}
 
export default Results;