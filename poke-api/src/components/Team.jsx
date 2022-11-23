import React, { useState } from 'react';


const Team = (props) => {

    const onClick = (e) => {
        console.log(e.target.value);
        props.updateTeam(current =>
            current.filter(poke => {
                return poke !== e.target.value;
            }),
        );
    }

    return (
        <>
            <div className='col-12'>
                <div className='card text-bg-dark mb-4 p-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <h5>Mi Equipo Pokemon:</h5>
                        </div>
                        {props.teamData.map((poke, id) => {
                            console.log(poke)
                            return (
                                <div key={id} className='col-12 mb-3'>
                                    <div className='card text-bg-secondary'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <img src={poke.sprites.front_default} alt=""></img>
                                            </div >
                                            <div className='col-5 pt-4'>
                                                <span className='text-capitalize fs-5'>{poke.name}</span>
                                            </div>
                                            <div className='col-4 pt-4'>
                                                <button className='btn btn-outline-light' value={poke.name} onClick={onClick}>Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div >

        </>
    )
}

export default Team;


