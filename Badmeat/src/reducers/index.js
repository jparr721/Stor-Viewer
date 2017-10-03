import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../../constants'


export const initialState = {
  viewingAllItems: false,
  dashboardSearchModalVisible: false,
  dashboardSettingsModalVisible: false,
  newEntryModalVisible: false,
  pantrySearchModalVisible: false,
  userSettingsModalVisible: false,

  isFetching: false,
  foodList: [],
  error: false
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_VIEW_ALL':
      return {
        ...state, viewingAllItems: !state.viewingAllItems
      };
    case 'SET_DASHBOARD_SEARCH_MODAL_VISIBLE':
      return {
        ...state, dashboardSearchModalVisible: !state.dashboardSearchModalVisible
      };
    case 'SET_DASHBOARD_SETTINGS_MODAL_VISIBLE':
      return {
        ...state, dashboardSettingsModalVisible: !state.dashboardSettingsModalVisible
      };
    case 'SET_NEW_ENTRY_MODAL_VISIBLE':
      return {
        ...state, newEntryModalVisible: !state.newEntryModalVisible
      };
    case 'SET_PANTRY_SEARCH_MODAL_VISIBLE':
      return {
        ...state, pantrySearchModalVisible: !state.pantrySearchModalVisible
      };
    case 'SET_USER_SETTINGS_MODAL_VISIBLE':
      return {
        ...state, userSettingsModalVisible: !state.userSettingsModalVisible
      };
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

export default appReducer;
