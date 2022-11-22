import React from 'react';

const Card = ({ pokemon }) => {

    return (
        <div className='col-12 col-lg-6'>
            <div className='card text-bg-dark mb-4'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <img
                            src={pokemon.sprites.front_default}
                            className="img-fluid w-100 rounded-start"
                            
                            alt={pokemon.name}>
                        </img>
                    </div>
                    <div className='col-12 col-md-8'>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">{pokemon.name}</h5>
                            <p className='text-uppercase'>{pokemon.types.map((t, i) => {
                                return(
                                    <span className='me-1' key={i} >-{t.type.name}</span>
                                )
                                })}
                            </p>
                            <p className='text-uppercase'>Salud: {pokemon.stats[0].base_stat}</p>
                            <p className='text-uppercase'>Ataque: {pokemon.stats[1].base_stat}</p>
                            <p className='text-uppercase'>Defensa: {pokemon.stats[2].base_stat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;