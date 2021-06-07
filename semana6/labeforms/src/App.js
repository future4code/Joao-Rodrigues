import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Etapa1 from './components/Etapa1.js'
import Etapa2 from './components/Etapa2.js'
import Etapa3 from './components/Etapa3.js'
import Final from './components/Final.js'

const EstilosGlobais = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: #2c3e50;
    color: #bdc3c7;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

function App() {
  return (
    <div>
      <EstilosGlobais/>
      <Etapa1/>
    </div>
  );
}

export default App;
