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

const store = createStore(routeReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
