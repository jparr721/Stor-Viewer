import React from 'react';
import { View, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from './components/dashboard/dashboard';
import Settings from './components/settings/settings';

export const Navigator = () => (
  <View>
    <Button
      onPress={() => this.props.navigation.navigate('DrawerOpen')}
      title="Open Drawer"/>
    <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
  </View>
);

export const Drawer = DrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      path: '',
    }
  },
  {
    Settings: {
      screen: Settings,
      path: '/settings',
    }
  },
  {
    intialRouteName: 'Dashboard',
    contentOptions: {
      activeTintColor: '#ffca28',
    },
  }
);
