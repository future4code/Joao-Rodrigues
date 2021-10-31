import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import VideoDetailsPage from '../pages/VideoDetailsPage/VideoDetailsPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>

                <Route exact path='/video-details/:movieId'>
                    <VideoDetailsPage/>
                </Route>

                <Route exact path='/'>
                    <h1>Pagina nao econtrada</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
