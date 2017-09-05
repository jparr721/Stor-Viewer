import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../../constants'
import { combineReducers } from 'redux';
import {
  HANDLE_VIEW_ALL
} from '../actions'

const initialState = {
  viewingAllItems: false,
  isFetching: false,
  foodList: [],
  error: false
};

function toggleViewAll(state = initialState, action) {
  switch (action.type) {
    case HANDLE_VIEW_ALL:
      return !state;
    default:
      return state;
  }
}

function appReducer(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        foodList: []
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        foodList: action.data
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  toggleViewAll,
  appReducer
});

export default reducers;
