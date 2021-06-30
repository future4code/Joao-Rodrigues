import React from "react";
import TelaInicial from './components/telainicial/TelaInicial'
import TelaMatch from './components/telamatch/TelaMatch'
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import {FaHeart} from 'react-icons/fa'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    color: #F3F2ED;
  }
`

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 50px 0;
`

const Title = styled.h1`
  margin: 0 20px;
  text-align: center;
  color: #D63031;
  font-size: 2.5em;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`

const IconLogo = styled.span`
  color: #D63031;
  font-size: 1,5em;
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <ContainerLogo>
        <IconLogo><FaHeart/></IconLogo>
        <Title>Astromatch</Title>
        <IconLogo><FaHeart/></IconLogo>
      </ContainerLogo>
      
      <TelaInicial/>
    </div>
  );
}

export default App;
