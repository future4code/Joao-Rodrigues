import React from "react";
import Router from "./route/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    background-color: #F7F7F8;
    color: #0F0F10;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a{
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle/>
        <Router/>
    </div>
  );
}

export default App;
