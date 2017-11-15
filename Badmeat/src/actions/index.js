import firebase from 'firebase';
import { api } from '../util'
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../../constants'

export function fetchDataFromAPI() {
  return (dispatch) => {
    dispatch(getData());
    fetch('https://young-garden-40398.herokuapp.com/food')
      .then(res => res.json())
      .then(json => dispatch(getDataSuccess()))
      .catch(err => dispatch(getDataFailure(err)));
  }
}

function getData() {
  return {
    type: FETCHING_DATA
  };
}

function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  };
}

function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}


export const toggleViewAll  = () => {
  return {
    type: 'TOGGLE_VIEW_ALL',
  }
};

export const setDashBoardSearchModalVisible = () => {
  return {
    type: 'SET_DASHBOARD_SEARCH_MODAL_VISIBLE',
  }
};

export const setDashboardSettingsModalVisible = () => {
  return {
    type: 'SET_DASHBOARD_SETTINGS_MODAL_VISIBLE',
  }
};

export const setNewEntryModalVisible = () => {
  return {
    type: 'SET_NEW_ENTRY_MODAL_VISIBLE',
  }
};

export const setPantrySearchModalVisible = () => {
  return {
    type: 'SET_PANTRY_SEARCH_MODAL_VISIBLE'
  }
};

export const setUserSettingsModalVisible = () => {
  return {
    type: 'SET_USER_SETTINGS_MODAL_VISIBLE'
  }
};

export const setRecipesModalVisible = () => {
  return {
    type: 'SET_RECIPES_MODAL_VISIBLE'
  }
};

export const loginFail = (dispatch) => {
  dispatch({ type: 'LOGIN_FAIL' });
};

export const loginSuccess = (dispatch, user) => {
  dispatch({
    type: 'LOGIN_SUCCESS',
    payload: user
  });
};

export const getEmailInput = (data) => {
  return {
    type: 'EMAIL_FIELD_CHANGED',
    payload: data,
    // console.log(data),
  };
};

export const getPasswordInput = (data) => {
  return {
    type: 'PASSWORD_FIELD_CHANGED',
    payload: data,
    // console.log(data),
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSuccess(dispatch, user))
          .catch(() => loginFail(dispatch))
      });
  };
};

export const loadPantry = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN' });

    api.get('/food')
      .then((data) => {
        console.log(data)
        for (key in data.data) {
          if (data.data.hasOwnProperty(key)) {
            storeFoodItemFromApi(data.data[key])
          }
        }
      })
      .catch((error) => {
        console.console.log(data);
        alert(error);
      });
  }
}

export const loadPantrySuccess = (dispatch) => {
  dispatch({ type: 'LOAD_PANTRY_SUCCESS' });
}

export const loadPantryFailure = (dispatch) => {
  dispatch({ type: 'LOAD_PANTRY_FAILURE' });
}

export const storeFoodItemFromApi = (item) => {
  return {
    type: 'STORE_FOOD_ITEM_FROM_API',
    payload: item,
  }
}
