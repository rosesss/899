import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import stores from './store';
import router from './router';

import Navigation from './pages/component/Navigation';
import './index.css';

const hashHistory = createHashHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(hashHistory, routerStore);

(async() => {
    const { homeStore } = stores;
    try {
        const data = await homeStore.getKeyWords(1);
        var oMeta = document.createElement('meta');
        oMeta.content = `${data.keyword}`;
        oMeta.name = 'keywords';
        document.querySelector('head').insertBefore(oMeta,document.querySelector('meta'));
        document.title = `${data.title}`
    } catch (error) {
        console.log(error)
    }
    ReactDOM.render(<Provider stores={stores}>
        <Router history={history}>
            { router() }
        </Router>
    </Provider>, document.getElementById('root'));
})()

