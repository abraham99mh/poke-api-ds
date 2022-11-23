import React, {useEffect} from 'react';
import axios from 'axios';

const ImgsTeam = (pokeName) => {

    const url = "https://pokeapi.co/api/v2/pokemon/"
    var img = ""

    useEffect(() => {
        axios
            .get(url + pokeName)
            .then((resp) => {
                
            });
    }, []);

    return ( 
        <>
            <img src={img} alt={pokeName}></img>
        </>
     );
}
 
export default ImgsTeam;