import React from 'react'
import HomePage from "../pages/homepage/HomePage";
import ListTripsPage from '../pages/listtripspage/ListTripsPage'
import AplicationForm from "../pages/applicationform/AplicationForm";
import LoginPage from "../pages/loginpage/LoginPage";
import AdminHomePage from "../pages/adminhomepage/AdminHomePage";
import CreateTrip from "../pages/createtrip/CreateTrip";
import TripDetailsPage from "../pages/tripdetailspage/TripDetailsPage";
import { BrowserRouter, Switch, Route} from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>

                <Route exact path='/listtripspage'>
                    <ListTripsPage/>
                </Route>

                <Route exact path='/applicationform'>
                    <AplicationForm/>
                </Route>

                <Route exact path='/loginpage'>
                    <LoginPage/>
                </Route>

                <Route exact path='/adminhomepage'>
                    <AdminHomePage/>
                </Route>

                <Route exact path='/createtrip'>
                    <CreateTrip/>
                </Route>

                <Route exact path='/tripdetailspage/:id'>
                    <TripDetailsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
