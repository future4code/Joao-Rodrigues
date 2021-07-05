import React from "react";
import HomePage from "./pages/homepage/HomePage";
import { createGlobalStyle } from "styled-components";

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
    <div>
      <GlobalStyle/>
      <HomePage/>
    </div>
  );
}

export default App;
