import React, { Component } from 'react';
import { AppRegistry, Dimensions, TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import Camera from 'react-native-camera';

class CameraTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <View style={styles.capture}>
            <Avatar
              large
              rounded
              icon={{name: 'camera', size: 42}}
              overlayContainerStyle={{backgroundColor: '#FFA000'}}
              onPress={this.takePicture.bind(this)}
              activeOpacity={0.7}
            />
          </View>
        </Camera>
      </View>
    );
  }
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('CameraTab', () => CameraTab);
export default CameraTab;
