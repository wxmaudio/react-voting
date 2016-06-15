import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import routes from './routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();

/**客户端渲染react**/
ReactDOM.render(<Router history={history}>{routes}</Router>,document.getElementById('app'));
