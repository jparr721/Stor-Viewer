/**
 * Created by deonj on 8/24/2017.
 */
import React, {Component} from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements'

const styles = StyleSheet.create({
  container:{
    marginRight: 10,
  },

});

class NewEntryDialogue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >Enter details or use the camera!</Text>
      </View>
    );
  }
}

export { NewEntryDialogue };
