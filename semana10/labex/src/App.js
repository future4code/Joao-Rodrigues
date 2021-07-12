import React from "react";
import Router from "./route/Router";
import { createGlobalStyle } from "styled-components";
import { GlobalStorage } from "./components/globalcontext/GlobalContext";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

function App() {
  return (
    <GlobalStorage>
      <GlobalStyle/>
      <Router/>
    </GlobalStorage>
  );
}

export default App;
