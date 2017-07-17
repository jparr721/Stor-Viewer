import React from 'react';
import { connect } from 'redux';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import { DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import { openDrawer, closeDrawer } from '../app/actions/drawerActions';

//Pages and styling
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from './components/dashboard/dashboard';
import Settings from './components/settings/settings';

// @connect((store) => {
//   return {
//
//   }
// })

export const Navigator = () => {
  <View style={{flex: 1, flexDirection: 'row'}}>
    <MaterialIcons
      name="menu"
      size={30}
      color="#000"
      onPress={() => this.props.navigation.navigate('DrawerOpen')} />
  </View>
}

export const Drawer = DrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      path: '/',
    },
    Settings: {
      screen: Settings,
      path: '/settings',
    },
  },
  {
    intialRouteName: 'Dashboard',
    contentOptions: {
      activeTintColor: '#ffca28',
    },
  }
);
