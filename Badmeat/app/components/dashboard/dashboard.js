import React, { PropTypes, Component } from 'react'
import { View, ScrollView, Text, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Navigator } from '../../router';

class Dashboard extends Component {
  render () {
    return (
      <ScrollView style={{marginTop: 20}}>
        <Text>Dashboard View Goes Here</Text>
        <Navigator />
      </ScrollView>
    );
  }
}

Dashboard.navigationOptions = {
  drawerLabel: "Dashboard",
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="dashboard" size={24} style={{ color: tintColor }} />
  ),
};

export default Dashboard;
