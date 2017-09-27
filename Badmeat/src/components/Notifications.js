import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import { Card, SmallCard, Header, HeaderButton } from './common';
import { Tile } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#42a5f5',
  },
  smallCardContainer: {
    flex: 1,
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
    fontSize:18,
    height:26,
    paddingLeft: 10,
    color: 'white'
  },
});

class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Notifications" >
        </Header>
        <ScrollView>
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Image source={require('../images/store.jpg')} style={styles.image}/>
              <Text style={styles.headline}>It's time to go shopping!</Text>
            </SmallCard>
          </View>
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Image source={require('../images/staples.jpg')} style={styles.image}/>
              <Text style={styles.headline}>You're running low on staple foods!</Text>
            </SmallCard>
          </View>
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Image source={require('../images/piggybank.jpg')} style={styles.image}/>
              <Text style={styles.headline}>Your monthly savings report is in!</Text>
            </SmallCard>
          </View>
          <View style={styles.smallCardContainer}>
            <SmallCard>
              <Image source={require('../images/facebook.png')} style={styles.image}/>
              <Text style={styles.headline}>Integrate with Facebook!</Text>
            </SmallCard>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Notifications;
