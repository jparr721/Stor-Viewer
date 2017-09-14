import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, SmallHeader } from './common';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#42a5f5',
  },
});

class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Notifications" />
        <SmallHeader headerText="Place holder for Notifications"/>
      </View>
    );
  }
}

export default Notifications;
