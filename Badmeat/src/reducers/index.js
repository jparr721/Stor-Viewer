import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../../constants'
import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, ScrollView } from 'react-native';
import { Header, SmallHeader, ColumnGrid, SmallCard } from '../components/common';



const pantryData = require('../../dummy_data/dummy_data_1.json');
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#424242',
  },
  viewAllButton: {
    alignItems: 'center',
    margin: 20,
    flexDirection:'row'
  },
  headline: {
    color: 'white',
  },
});

const fullPantry = pantryData.fullPantry.map((item,i) => (
  <View style={{flexDirection:'row'}}>
    <SmallCard>
      <Text style={styles.headline}>{item.name}</Text>
    </SmallCard>
    <SmallCard>
      <Text style={styles.headline}>{item.name}</Text>
    </SmallCard>

  </View>
  ))

export const initialState = {
  viewingAllItems: false,
  dashboardSearchModalVisible: false,
  dashboardSettingsModalVisible: false,
  newEntryModalVisible: false,
  pantrySearchModalVisible: false,
  userSettingsModalVisible: false,
  recipesModalVisible: false,
  notificationsList: require('../../dummy_data/dummy_notification_data.json'),

  expiringFoodItems: pantryData.expiringFood,
  fullPantryItems: pantryData.fullPantry,
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
    case 'SET_RECIPES_MODAL_VISIBLE':
      return {
        ...state, recipesModalVisible: !state.recipesModalVisible
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
