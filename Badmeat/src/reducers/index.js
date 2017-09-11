import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../../constants'


export const initialState = {
  viewingAllItems: false,
  searchModalVisible: false,
  newEntryModalVisible: false,
  settingsModalVisible: false,
  isFetching: false,
  foodList: [],
  error: false
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_VIEW_ALL':
      return {
        ...state,
        viewingAllItems: !state.viewingAllItems
      };
    case 'SET_SETTINGS_MODAL_VISIBLE':

      return {
        ...state, settingsModalVisible: !state.settingsModalVisible
      };
    case 'SET_NEW_ENTRY_MODAL_VISIBLE':
      return {
        ...state,
        newEntryModalVisible: !state.newEntryModalVisible
      };
    case 'SET_SEARCH_MODAL_VISIBLE':
      return {
        ...state,
        searchModalVisible: !state.searchModalVisible
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
