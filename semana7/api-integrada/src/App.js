import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'
import Cadastro from "./components/cadastro/Cadastro";
import ListaDeUsuarios from "./components/listaDeUsuarios/ListaDeUsuarios";

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

const Botao = styled.button`
  padding: 5px;
  cursor: pointer;
  display: block;
  width: 120px;
  margin: 0 auto 50px auto;
`

function App() {
  const [modal, setModal] = React.useState(true)
  
  const PaginaCadastro = Cadastro

  const PaginaLista = ListaDeUsuarios

  return (
    <ContainerGeral>
      <EstilosGlobais/>
      <Botao onClick={()=>setModal(!modal)}>{modal ? 'Ir para a lista' : 'Ir para cadastro'}</Botao>
      {modal ? <PaginaCadastro/> : <PaginaLista/>}
    </ContainerGeral>
  );
}

export default App;
