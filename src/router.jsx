import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
const router = () =>{
        return (
            <Switch>
                <Route path='/' component={HomePage} exact />
            </Switch>
        );
}

export default router;