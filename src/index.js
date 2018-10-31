import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux'
// import rootReducer from './reducers/rootReducer'

import './index.css';
import * as serviceWorker from './serviceWorker';
import Search from "./Container/Search";
import ResultsTable from "./Container/ResultsTable";
import LanguagesSwitcher from "./Container/LanguagesSwitcher";

// const store = createStore(rootReducer);

ReactDOM.render(
    <Provider>
      <div style={{width: '80%', maxWidth: '1200px', margin: '0 auto'}}>
        <LanguagesSwitcher/>
        <HashRouter>
          <Switch>
            <Route exact path='/search' component={Search}/>
            <Route path='/results' component={ResultsTable}/>
          </Switch>
        </HashRouter>
      </div>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
