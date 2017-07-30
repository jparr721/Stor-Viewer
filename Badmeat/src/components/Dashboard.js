import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, SmallCard , Header} from './common';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Home" />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  smallCardContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default Dashboard;
