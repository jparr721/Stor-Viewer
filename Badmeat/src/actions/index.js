import firebase from 'firebase';
import axios from 'axios';

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

export const setCreateAccountModalVisible = () => {
  return {
    type: 'SET_CREATE_ACCOUNT_MODAL_VISIBLE'
  }
}

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
  };
};

export const getPasswordInput = (data) => {
  return {
    type: 'PASSWORD_FIELD_CHANGED',
    payload: data,
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
    dispatch({ type: 'LOAD_PANTRY' });

    axios.get('http://104.236.200.91/index.php/food')
      .then((data) => {
        dispatch(loadPantrySuccess())
        for (key in data.data) {
            dispatch(storeFoodItemFromApi(data.data[key]));
        }
      })
      .catch((error) => {
        dispatch(loadPantryFailure(error));
        console.log(error);
        //alert(error);
      });
  }
}

export const loadPantrySuccess = () => {
  return {
    type: 'LOAD_PANTRY_SUCCESS'
  };
}

export const loadPantryFailure = (errorh) => {
  return {
    type: 'LOAD_PANTRY_FAILURE'
  };
}

export const storeFoodItemFromApi = (item) => {
  return {
    type: 'STORE_FOOD_ITEM_FROM_API',
    payload: item,
  };
}

export const newEntry = (config) => {
  return (dispatch) => {
    dispatch({ type: 'NEW_ENTRY' });
    // This ain't working yet. Don't get your hopes up.
    axios.post('http://104.236.200.91/index.php/food', {
        name: 'watermelon',
        quantity: '3',
        units: 'oz',
        type: 'Fruit',
        user: 'test@gmnail.com',
        expiresOn: '2017-15-04',
      })
      .then((response) => {
        console.log(response);
        alert(response);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
}

export const updateNewEntryType = (selection) => {
  return {
    type: 'UPDATE_NEW_ENTRY_TYPE',
    payload: selection,
  };
}

export const updateNewEntryUnits = (selection) => {
  return {
    type: 'UPDATE_NEW_ENTRY_UNITS',
    payload: selection,
  };
}

export const updateNewEntryName = (input) => {
  return {
    type: 'UPDATE_NEW_ENTRY_NAME',
    payload: input,
  };
}

export const updateNewEntryQuantity = (input) => {
  return {
    type: 'UPDATE_NEW_ENTRY_QUANTITY',
    payload: input,
  };
}
