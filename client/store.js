import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import route reducer
import routeReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create object for default data
const defaultState = {
  posts: posts,
  comments: comments
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() :  f => f
);

const store = createStore(routeReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
if(module.hot){
  module.hot.accept('./reducers', () => {
    //requires top level reducer
    const nextRootReducer = require('./reducers/index').default;
    //replace entire reducer
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
