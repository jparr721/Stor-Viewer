import React, {Component} from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Settings from '../components/settings/settings';
import Dashboard from '../components/dashboard/dashboard';
import Map from '../components/foodMap/map';
import Notifications from '../components/notifications/notifications';
import Camera from '../components/camera/camera';
import MyFood from '../components/myFood/myFood';

export const DashboardStack = StackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        },
    },
    MyFood: {
        screen: MyFood,
        navigationOptions: {
            title: 'My Food'
        },
    },
});

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings'
        },
    },
})

export const Tabs = TabNavigator({
    Dashboard: {
        screen: DashboardStack,
        path: '',
        navigationOptions: {
            // tabBarLabel: ' ',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name='view-dashboard'
                    type="material-community"
                    size={32}
                    color={tintColor}/>
            ),
        }
    },
    Maps: {
        screen: Map,
        path: '',
        navigationOptions: {
            // tabBarLabel: ' ',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name='map-marker'
                    type="material-community"
                    size={32}
                    color={tintColor}/>
            ),
        }
    },
    Camera: {
        screen: Camera,
        path: '',
        navigationOptions: {
            // tabBarLabel: ' ',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name='camera-iris'
                    type="material-community"
                    size={50}
                    color={tintColor}/>
            ),
        }
    },
    Notifications: {
        screen: Notifications,
        path: '',
        navigationOptions: {
            // tabBarLabel: ' ',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name='bell'
                    type="material-community"
                    size={32}
                    color={tintColor}/>
            ),
        }
    },
    Settings: {
        screen: SettingsStack,
        path: '',
        navigationOptions: {
            // tabBarLabel: '',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name='menu'
                    type="material-community"
                    size={32}
                    color={tintColor}/>
            ),
        }
    }
},
    {
        tabBarOptions: {
            showLabel: false,
        },
    },
);

export const myFoodStack = StackNavigator({
    Dashboad: {
        screen: Dashboard,
        navigationOptions: {
            title: 'My Food',
        },
    },
    
    
});