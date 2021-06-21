import React from "react";
import styled, {createGlobalStyle} from 'styled-components'
import Header from "./components/Header";
import MenuLateral from "./components/MenuLateral";
import Detalhes from "./components/Detalhes";
import { GlobalStorage } from "./components/GlobalContext";

const EstilosGlobais = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #121212;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

const ContainerMain = styled.main`
  margin-top: 89px;
  display: flex;
`
const ContainerLateral = styled.aside`
  background-color: #040505;
`

const ContainerMusicas = styled.div`
  width: 100%;
  padding: 20px 60px;
`

function App() {

  return (
    <GlobalStorage>
      <div>
        <EstilosGlobais/>
        <Header/>
        <ContainerMain>
          <ContainerLateral>
            <MenuLateral/>
          </ContainerLateral>

          <ContainerMusicas>
            <Detalhes/>
          </ContainerMusicas>
        </ContainerMain>
      </div>
    </GlobalStorage>
  );
}

export default App;
