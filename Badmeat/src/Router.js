import React from 'react';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {Icon} from 'react-native-elements';

// Screen Imports
import Dashboard from './components/Dashboard';
import Camera from './components/Camera';
import Map from './components/Map';
import Pantry from './components/Pantry';
import Notifications from './components/Notifications';

const Router = TabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      path: '',
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='collage'
            type="material-community"
            size={28}
            color={tintColor}/>
        ),
      }
    },
    Map: {
      screen: Map,
      path: '',
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='map-marker-radius'
            type="material-community"
            size={28}
            color={tintColor}/>
        )
      }
    },
    Camera: {
      screen: Camera,
      path: '',
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='camera-iris'
            type="material-community"
            size={28}
            color={tintColor}/>
        ),
      }
    },
    Notifications: {
      screen: Notifications,
      path: '',
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='bell'
            type="material-community"
            size={28}
            color={tintColor}/>
        )
      }
    },
    Pantry: {
      screen: Pantry,
      path: '',
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name='food-apple'
            type="material-community"
            size={28}
            color={tintColor}/>
        )
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {

      showIcon: true,
      showLabel: false,
      activeTintColor: '#42a5f5',
    },
  }
);

export default Router;
