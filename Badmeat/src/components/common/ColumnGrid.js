import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SizedTile } from './';

const styles = StyleSheet.create({
  grid: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  headline: {
    color: 'white',
    fontSize:16,
  },
  expiration: {
    color: '#7cdbd5',
    fontSize:12,
  },
  headlineContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 5,
  },
  tileContent: {
    paddingTop: 40,
  }
});

class ColumnGrid extends Component {
  render() {
      return (
        <ScrollView>
          <View style={styles.grid}>
            {
              this.props.items.map((item,i) => (
              <SizedTile key={i}>
                <View style={styles.tileContent}>
                  <Icon name='food' color='white' type="material-community" size={40}/>
                  <View style={styles.headlineContainer}>
                    <Text style={styles.headline}>{item.name}</Text>
                    <Text style={styles.expiration}>Expires: {item.expiresOn.substring(5,11)}</Text>
                  </View>
                </View>
              </SizedTile>
              ))
            }
          </View>
        </ScrollView>
      );
  }
}

export {ColumnGrid};
