//Flowin'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Navigation in the drawer

//Middleware
const middleware = () => {
  return applyMiddleware(thunk, logger())
};

export default createStore(
  combineReducers({

  })
)
