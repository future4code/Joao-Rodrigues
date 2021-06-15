import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'
import Cadastro from "./components/cadastro/Cadastro";

const EstilosGlobais = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #222;
  }

  li{
    list-style: none;
  }
`

const ContainerGeral = styled.div`
  padding-top: 50px;
`

function App() {

  return (
    <ContainerGeral>
      <EstilosGlobais/>
      <Cadastro/>
    </ContainerGeral>
  );
}

export default App;
