import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, SmallHeader } from './common';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#42a5f5',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: null,
    width: null,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class Map extends Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style={styles.container}>
        <View style ={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: 42.331429,
              longitude: -83.045753,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>
      </View>
    );
  }
}

export default Map;
