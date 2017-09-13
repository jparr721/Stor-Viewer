import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, } from 'react-native';
import { Card, SmallCard, Header, HeaderButton } from './common';
import { DashboardSearchDialogue, DashboardSettingsDialogue } from './popups'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#42a5f5',
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
        <Header headerText="Home" >
          <DashboardSearchDialogue/>
          <DashboardSettingsDialogue/>
        </Header>
        <ScrollView>
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
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Text>Small Card</Text>
            </SmallCard>
            <SmallCard>
              <Text>Small Card</Text>
            </SmallCard>
          </View>
        </ScrollView>
      </View>
    );
  }
}



export default Dashboard;
