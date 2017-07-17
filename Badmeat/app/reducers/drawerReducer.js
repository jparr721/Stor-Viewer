import * as types from '../actions/types';

const drawerReducer = (state={value: false} , action) => {
  switch(action.type) {
    case types.DRAWER_OPEN_TRUE: {
      return {...state, value: action.payload}
      break;
    }
    case types.DRAWER_OPEN_FALSE: {
      return {...state, value: action.payload}
      break;
    }
  }
  return state;
};

export default drawerReducer;
