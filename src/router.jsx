import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SeoPage from './pages/SeoPage';
import Main from './pages'
const router = () =>{
        return (
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        );
}

export default router;