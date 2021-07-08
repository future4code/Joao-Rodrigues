import React from "react";
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/homepage/HomePage";
import ListTripsPage from './pages/listtripspage/ListTripsPage'
import AplicationForm from "./pages/applicationform/AplicationForm";
import LoginPage from "./pages/loginpage/LoginPage";
import AdminHomePage from "./pages/adminhomepage/AdminHomePage";
import CreateTrip from "./pages/createtrip/CreateTrip";
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
      {/* <HomePage/> */}
      {/* <ListTripsPage/> */}
      {/* <AplicationForm/> */}
      {/* <LoginPage/> */}
      {/* <AdminHomePage/> */}
      {/* <CreateTrip/> */}
    </GlobalStorage>
  );
}

export default App;
