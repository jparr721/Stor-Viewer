import React, { Component, PropTypes } from 'react'
import { View, ScrollView, Text, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class Settings extends Component {
  render () {
    return (
      <View style={{marginTop: 20}}>
        <Text>Settings Go Here</Text>

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
