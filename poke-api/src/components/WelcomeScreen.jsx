import React from 'react';

const WelcomeScreen = ({ setWelcome }) => {

    const onClick = () => {
        console.log("Cont");
        setWelcome(false);
    }

    return (
        <>
            <div className='container text-center pt-5 mt-5'>
                <h1>Bienvenido a tu colección Pokemon</h1>
                <button className='btn btn-danger btn-lg mt-3' onClick={onClick}>Continuar</button>
            </div>
        </>
    );
}

export default WelcomeScreen;