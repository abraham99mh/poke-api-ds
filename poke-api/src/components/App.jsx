import React, { useEffect, useState } from 'react';
import Pokemons from './Pokemons';
import Results from './Results';
import Search from './Search';

function App() {

  const [input, setInput] = useState('');

  const [team, updateTeam] = useState([]);

  const home = () => {
    setInput('');
  }

  const Team = () => {
    let teamPkes = team.map((pokes, id) =>
      <li key={id}>{pokes}</li>
    );
    return (
      <ul>
        {teamPkes}
      </ul>
    )
  }

  const quitar = () => {
    let pos;
    pos = team.length-1;
    // console.log(pos);
    // console.log(team[pos]);
    // console.log(typeof(team));
    team.pop();
  }
  useEffect(() => {
    
  }, [team]);
  

  return (
    <div className="container-fluid mt-4 px-0">
      <Search input={input} setInput={setInput} />
      <div className="h1 ps-3 user-select-none" style={{ cursor: 'pointer' }} onClick={home}>Equipo Pokemons</div>
      <div className="text-bg-danger p-5">
        <div className='row'>
          <div className='col-9'>
            {input ? <Results input={input} /> : <Pokemons team={team} updateTeam={updateTeam} />}
          </div>
          <div className='col-3'>
            Mi Equipo Pokemon:
            <Team />
            <button onClick={quitar}>Eliminar último</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
