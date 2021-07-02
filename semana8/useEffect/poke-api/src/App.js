import React from 'react';
import PokeCard from './components/pokecard/PokeCard'
import styled from 'styled-components';
import axios from 'axios';

const ContainerGeral = styled.div`
  width: 50vw;
  margin: 50px auto;
  border: 1px solid red;
`

function App() {
  const [pokemons, setPokemons] = React.useState([])
  const [pokeName, setPokeName] = React.useState('')

  React.useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokemons(response.data.results );
      })
      .catch(err => {
        console.log(err);
      });
  },[])

  const changePokeName = event => {
    setPokeName(event.target.value );
  };

  return (
    <ContainerGeral>
      <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokemons.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </ContainerGeral>
  );
}

export default App;
