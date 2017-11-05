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
  },
  headlineContainer: {
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
              <SizedTile>
                <View style={styles.tileContent}>
                  <Icon name='food' color='white' type="material-community" size={40}/>
                  <View style={styles.headlineContainer}>
                    <Text style={styles.headline}>{item.name}</Text>
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
