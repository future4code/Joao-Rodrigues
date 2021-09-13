import React from "react";
import TelaInicial from './components/telainicial/TelaInicial'
import TelaMatch from './components/telamatch/TelaMatch'
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import {FaHeart} from 'react-icons/fa'
import { GlobalStorage } from "./components/globalcontext/GlobalContext";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    color: #fbfbfb;
    background-color: #fbfbfb;
  }
`

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px 0;

`

const Title = styled.h1`
  margin: 0 20px;
  text-align: center;
  color: #D63031;
  font-size: 2.5em;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  @media(max-width: 768px){
    font-size: 2em;
  }
`

const IconLogo = styled.span`
  color: #D63031;
  font-size: 1.5em;
  animation-name: hearts;
  animation-duration: 2s;

  @media(max-width: 768px){
    font-size: 1em;
  }
`

const Btn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #D63031;
  color: #fbfbfb;
  width: 340px;
  display: block;
  margin: 30px auto 10px auto;
  cursor: pointer;
  box-shadow: 0 4px 6px 2px rgba(0,0,0,0.3);
  font-size: 1em;
  transition: .3s;
  outline: none;

  :hover{
    box-shadow: 0 8px 12px 2px rgba(0,0,0,0.3);
    opacity: 0.9;
  }

  @media(max-width: 768px){
    font-size: 0.85em;
  }

  @media(max-width: 420px){
    font-size: 0.75em;
    text-align: center;

    :hover{
      box-shadow: 0 8px 12px 2px rgba(0,0,0,0);
      opacity: 1;
    }
  }
`

function App() {
  const [tela, setTela] = React.useState(true)

  const handleClick = (()=>{
    setTela(!tela)
  })

  return (
    <GlobalStorage>
      <GlobalStyle/>
      <ContainerLogo>
        <IconLogo><FaHeart/></IconLogo>
        <Title>AstroMatch</Title>
        <IconLogo><FaHeart/></IconLogo>
      </ContainerLogo>

      {tela? <TelaInicial/>:<TelaMatch/>}

      <Btn onClick={handleClick}>{tela ? 'Ir para lista de matchs':'Voltar para o inicio'}</Btn>
    </GlobalStorage>
  );
}

export default App;
