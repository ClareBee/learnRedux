// let's go!
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import css from './styles/style.styl';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//import bindings to link React and Redux
import { Provider} from 'react-redux';
//import the store no brackets as default, import history with brackets as named
import store, { history} from './store';

const router = (
  //exposes store to app
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)

render(router, document.getElementById('root'));
