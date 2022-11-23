import React, { useEffect, useState } from 'react';
import Pokemons from './Pokemons';
import Results from './Results';
import Search from './Search';
import Team from './Team';
import axios from 'axios';
import WelcomeScreen from './WelcomeScreen';

function App() {

  const [input, setInput] = useState('');

  const [welcome, setWelcome] = useState(true);

  const [team, updateTeam] = useState([]);

  const [teamData, updateTeamData] = useState([]);

  const urlImg = "https://pokeapi.co/api/v2/pokemon/"
  useEffect(() => {
    updateTeamData([]);
    for (let i = 0; i < team.length; i++) {
      axios
        .get(urlImg + team[i])
        .then((resp) => {
          updateTeamData(prevArray => [...prevArray, resp.data]);
        });
    }
  }, [team]);



  const home = () => {
    setInput('');
    console.log(teamData);
  }


  return (
    <>
      <div className="container-fluid mt-4 px-0">
        {welcome ? <WelcomeScreen setWelcome={setWelcome} /> :
          <>
            <Search input={input} setInput={setInput} />
            <div className="h1 ps-3 user-select-none" style={{ cursor: 'pointer' }} onClick={home}>Equipo Pokemons</div>
            <div className="text-bg-danger p-5">
              <div className='row'>
                <div className='col-9'>
                  {input ? <Results input={input} team={team} updateTeam={updateTeam} /> : <Pokemons team={team} updateTeam={updateTeam} />}
                </div>
                <div className='col-3'>
                  <Team teamData={teamData} team={team} updateTeam={updateTeam} />
                </div>
              </div>
            </div>
          </>
        }

      </div>
    </>
  );
}

export default App;
