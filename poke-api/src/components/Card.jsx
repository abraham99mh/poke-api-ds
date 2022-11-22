import React from 'react';

const Card = (props) => {

    const ShowButton = () =>{
        console.log(props.team.length);
        if(props.team.length<5){
            return(
                <button className='btn btn-danger' onClick={agregarTeam}>Agregar</button>
            )
        }
    }
    const agregarTeam = () => {
        props.updateTeam(prevArray => [...prevArray, props.pokemon.name]);
    }

    return (
        <div className='col-12 col-lg-6'>
            <div className='card text-bg-dark mb-4'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <img
                            src={props.pokemon.sprites.front_default}
                            className="img-fluid w-100 rounded-start"
                            
                            alt={props.pokemon.name}>
                        </img>
                    </div>
                    <div className='col-12 col-md-5'>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">{props.pokemon.name}</h5>
                            <p className='text-uppercase'>{props.pokemon.types.map((t, i) => {
                                return(
                                    <span className='me-1' key={i} >-{t.type.name}</span>
                                )
                                })}
                            </p>
                            <p className='text-uppercase'>Salud: {props.pokemon.stats[0].base_stat}</p>
                            <p className='text-uppercase'>Ataque: {props.pokemon.stats[1].base_stat}</p>
                            <p className='text-uppercase'>Defensa: {props.pokemon.stats[2].base_stat}</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 pt-5'>
                        <ShowButton/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;