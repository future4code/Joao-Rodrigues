import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostPage from '../pages/PostPage/PostPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path={'/'}>
                    <FeedPage/>
                </Route>

                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>

                <Route exact path={'/cadastrar'}>
                    <SignupPage/>
                </Route>
                
                <Route exact path={'/post/:id'}>
                    <PostPage/>
                </Route>
                
                <Route>
                    <div>Pagina não encontrada!</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
