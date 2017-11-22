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
  createAccountModalVisible: false,
  notificationsList: require('../../dummy_data/dummy_notification_data.json'),

  expiringFoodItems: pantryData.expiringFood,
  fullPantryItems: pantryData.fullPantry,
  isFetching: false,
  foodList: [],

  email: '',
  password: '',
  error: '',
  pantryLoadFailureMessage: '',
  user: null,
  loading: false,
  loggedIn: false,
  newEntryType: '',
  newEntryUnits: '',
  newEntryName: '',
  newEntryQuantity: '',
  newEntryNameError: 'test',
  newEntryQuantityError: 'test',
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
    case 'SET_CREATE_ACCOUNT_MODAL_VISIBLE':
      return {
        ...state, createAccountModalVisible: !state.createAccountModalVisible
      };
    case 'LOGIN':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        email: '',
        password: '',
        error: '',
        loggedIn: true,
        loading: false,
        user: action.payload,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        error: 'Email or Password is Incorrect',
        password: '',
        loggedIn: false,
        loading: false,
      };
    case 'EMAIL_FIELD_CHANGED':
      return {
        ...state,
        email: action.payload,
      };
    case 'PASSWORD_FIELD_CHANGED':
      return {
        ...state,
        password: action.payload,
      };
    case 'LOAD_PANTRY':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_PANTRY_SUCCESS':
      return {
        ...state,
        pantryLoadFailureMessage: '',
        loading: false,
      };
    case 'LOAD_PANTRY_FAILURE':
      return {
          ...state,
          pantryLoadFailureMessage: 'Could not load food. Check connection!',
          loading: false,
      };
    case 'STORE_FOOD_ITEM_FROM_API':
      return {
        ...state,
        foodList: [...state.foodList, action.payload]

      };
    case 'UPDATE_NEW_ENTRY_TYPE':
      return {
        ...state,
        newEntryType: action.payload,
      };
    case 'UPDATE_NEW_ENTRY_UNITS':
      return {
        ...state,
        newEntryUnits: action.payload,
      };
    case 'UPDATE_NEW_ENTRY_NAME':
      return {
        ...state,
        newEntryName: action.payload,
      };
    case 'UPDATE_NEW_ENTRY_QUANTITY':
      return {
        ...state,
        newEntryQuantity :action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
