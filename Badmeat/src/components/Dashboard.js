import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Dashboard is here, bruh
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default Dashboard;
