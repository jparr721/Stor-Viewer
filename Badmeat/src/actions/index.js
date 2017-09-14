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

