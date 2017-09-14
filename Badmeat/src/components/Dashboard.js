import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
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
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 4,
  },

  headline: {
    paddingLeft: 10,
    color: 'white'
  },
});

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Dashboard" >
          <DashboardSearchDialogue/>
          <DashboardSettingsDialogue/>
        </Header>
        <ScrollView>
          <Card>
            <Text style={styles.headline}>Dashboard</Text>
          </Card>
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Image source={require('../images/lemons.jpg')} style={styles.image}/>
              <Text style={styles.headline}>New Deals</Text>
            </SmallCard>
            <SmallCard>
              <Image source={require('../images/peppers.jpg')} style={styles.image}/>
              <Text style={styles.headline}>Recipes</Text>
            </SmallCard>
          </View>
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Image source={require('../images/potatoes.jpg')} style={styles.image}/>
              <Text style={styles.headline}>My List</Text>
            </SmallCard>
            <SmallCard>
              <Image source={require('../images/barbecue.jpg')} style={styles.image}/>
              <Text style={styles.headline}>Share</Text>
            </SmallCard>
          </View>
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Image source={require('../images/soup.jpg')} style={styles.image}/>
              <Text style={styles.headline}>Track Savings</Text>
            </SmallCard>
            <SmallCard>
              <Image source={require('../images/orange.jpg')} style={styles.image}/>
              <Text style={styles.headline}>Shop Online</Text>
            </SmallCard>
          </View>
        </ScrollView>
      </View>
    );
  }
}



export default Dashboard;
