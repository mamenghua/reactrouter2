import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './views/Home';
import About from './views/About';
import Par from './views/Par';
import Detail1 from './views/Detail1';
import Que from './views/Que';
import Detail2 from './views/Detail2';
import * as serviceWorker from './serviceWorker';

import {Router,Route,hashHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router history={hashHistory}>
    <Redirect from='/' to='/home'/>
        <Route path='/' component={App}>
            {/* IndexRoute 父路径下，默认展示的子组件 */}
            {/* <IndexRoute component={Home}/> */}

            {/* IndexRedirect 父路径，直接重定向到about路径下 */}
            {/* <IndexRedirect to='/about'/> */}
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/par' component={Par}>
                <Route path='/detail1/:id' component={Detail1}></Route>
            </Route>
            <Route path='/que' component={Que}>
                <Route path='/detail2' component={Detail2}></Route>
            </Route>
        </Route>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
