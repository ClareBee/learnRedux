import{combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import posts from './posts';
import comments from './comments';

const routeReducer = combineReducers({posts, comments, routing: routerReducer});

export default routeReducer;
