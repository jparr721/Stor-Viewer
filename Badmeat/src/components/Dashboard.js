import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Card, SmallCard, Header } from './common';
import { DashboardSearchDialogue, DashboardSettingsDialogue, UserMenu } from './popups'
import { Avatar, Icon  } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#424242',
  },
  smallCardContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: null,
    width: null,
    borderRadius: 2,
    flex:1
  },
  backdropView: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 2,
  },
  headline: {
    fontSize: 24,
    color: 'white',
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
                <Image source={require('../images/pizza.jpg')} style={styles.image}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>RECIPES</Text>
                  </View>
                </Image>
              </SmallCard>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardContainer}>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/peppers.jpg')} style={styles.image}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>MY LIST</Text>
                  </View>
                </Image>
              </SmallCard>
            </TouchableOpacity>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/barbecue.jpg')} style={styles.image}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>SHARE</Text>
                  </View>
                </Image>
              </SmallCard>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardContainer}>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/apples.jpg')} style={styles.image}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>SAVINGS</Text>
                  </View>
                </Image>
              </SmallCard>
            </TouchableOpacity>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/orange.jpg')} style={styles.image}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>STORES</Text>
                  </View>
                </Image>
              </SmallCard>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Dashboard;
