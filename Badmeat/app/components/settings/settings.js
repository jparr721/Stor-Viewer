import React, { Component, PropTypes } from 'react'
import { View, ScrollView, Text, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Navigator from '../../router';

class Settings extends Component {
  render () {
    return (
      <View style={{marginTop: 20}}>
        <Text>Settings Go Here</Text>
        <Navigator />
      </View>
    )
  }
}

Settings.navigationOptions = {
  drawerLabel: 'Settings',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="settings"
      size={24}
      style={{ color: tintColor }} />
  ),
};

export default Settings;
