//Flowin'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

const errorHandler = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log('Error!: ', e);
  }
}

const middleware = applyMiddleware(thunk, errorHandler, createLogger());

export default createStore(rootReducer, middleware);

/** Uncomment this code for Redux-level debugging **/
// store.subscribe(() => {
//   console.log("Store updated", store.getState());
// })
