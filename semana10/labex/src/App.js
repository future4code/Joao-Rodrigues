import React from "react";
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/homepage/HomePage";
import ListTripsPage from './pages/listtripspage/ListTripsPage'


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
      {/* <HomePage/> */}
      <ListTripsPage/>
    </div>
  );
}

export default App;
