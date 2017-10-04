import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Card, SmallCard, Header } from './common';
import { DashboardSearchDialogue, DashboardSettingsDialogue, UserMenu } from './popups'
import { Avatar, Icon  } from 'react-native-elements';

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
    borderRadius: 2,
  },
  headline: {
    paddingLeft: 5,
    paddingBottom: 2,
    fontSize: 16,
    color: '#ECEFF1'
  },
  pageTitleStyle: {
    fontSize: 32,
    fontWeight: '700',
    flex: 1,
  },
});

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserMenu />
        <Header headerText="Dashboard">
          <DashboardSearchDialogue/>
        </Header>
        <ScrollView>
          <View style={styles.smallCardContainer}>

            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/pizza.jpg')} style={styles.image}/>
                <Text style={styles.headline}>Recipes</Text>
              </SmallCard>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardContainer}>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/peppers.jpg')} style={styles.image}/>
                <Text style={styles.headline}>My List</Text>
              </SmallCard>
            </TouchableOpacity>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/barbecue.jpg')} style={styles.image}/>
                <Text style={styles.headline}>Share</Text>
              </SmallCard>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardContainer}>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/apples.jpg')} style={styles.image}/>
                <Text style={styles.headline}>Track Savings</Text>
              </SmallCard>
            </TouchableOpacity>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/orange.jpg')} style={styles.image}/>
                <Text style={styles.headline}>Stores & Deals</Text>
              </SmallCard>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Dashboard;
