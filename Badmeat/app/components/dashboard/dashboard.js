import React, { PropTypes, Component } from 'react'
import { View, ScrollView, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Dashboard extends Component {
  render () {
    return (
      <ScrollView>
        <Text>Super cool text View</Text>
      </ScrollView>
    );
  }
}

Dashboard.navigationOptions = {
  drawerLabel: "Dashboard",
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="view-dashboard" size={24} style={{ color: tintColor }} />
  ),
};

export default Dashboard;
