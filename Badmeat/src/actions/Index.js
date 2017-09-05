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


export const HANDLE_VIEW_ALL  = 'HANDLE_VIEW_ALL';

export function handleViewAll(viewingAll) {
  return { type: HANDLE_VIEW_ALL, viewingAll};
}