import React, { useState } from 'react';
import Pokemons from './Pokemons';
import Results from './Results';
import Search from './Search';

function App() {

  const [input, setInput] = useState('');

  const [team, updateTeam] = useState('');

  const home = () => {
    setInput('');
  }

  return (
    <div className="container-fluid mt-4 px-0">
      <Search input={input} setInput={setInput}/>
      <div className="h1 ps-3 user-select-none" style={{cursor:'pointer'}} onClick={home}>Equipo Pokemons</div>
      <div className="text-bg-danger p-5">
        <div className='row'>
          <div className='col-9'>
          {input ? <Results input={input} /> : <Pokemons />}
          </div>
          <div className='col-3'>
            Equipo xd
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;