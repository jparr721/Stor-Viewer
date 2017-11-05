import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    borderColor: '#000',
    backgroundColor: '#212121',
    borderBottomWidth: 0,
    margin: 10,
    height: 150,
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    overflow: 'hidden',
  }
});

class SizedTile extends Component {
  render() {
    return (
    <View style={[styles.container]}>
      {this.props.children}
    </View>
  );
  }
}

export { SizedTile }
