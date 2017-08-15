import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, SmallCard, Header } from './common';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#80d6ff',
  },
  smallCardContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Home" button1="magnify" button2="bell" />
        <Card>
          <Text>Dashboard</Text>
        </Card>
        <View style={styles.smallCardContainer}>
          <SmallCard>
            <Text>Small Card</Text>
          </SmallCard>
          <SmallCard>
            <Text>Small Card</Text>
          </SmallCard>
        </View>
        <View style={styles.smallCardContainer}>
          <SmallCard>
            <Text>Small Card</Text>
          </SmallCard>
          <SmallCard>
            <Text>Small Card</Text>
          </SmallCard>
        </View>
      </View>
    );
  }
}

export default Dashboard;
